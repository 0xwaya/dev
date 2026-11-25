import { SYSTEM_PROMPT } from "../src/lib/portfolioPrompt.js";

const MAX_MESSAGES = 12;
const MAX_CHARS = 2000;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return res.status(503).json({ error: "Chat is not configured." });

  const raw = Array.isArray(req.body?.messages) ? req.body.messages : [];
  const messages = raw
    .filter((m) => (m?.role === "user" || m?.role === "assistant") && typeof m.content === "string")
    .slice(-MAX_MESSAGES)
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_CHARS) }));
  if (!messages.length || messages[messages.length - 1].role !== "user") {
    return res.status(400).json({ error: "A user message is required." });
  }

  try {
    const upstream = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        model: process.env.GROQ_MODEL || "llama-3.3-70b-versatile",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
        max_tokens: 600,
        temperature: 0.4,
      }),
    });
    const data = await upstream.json();
    if (!upstream.ok) return res.status(502).json({ error: data?.error?.message || "Upstream error" });
    return res.status(200).json({ reply: data.choices?.[0]?.message?.content || "" });
  } catch {
    return res.status(502).json({ error: "Upstream unreachable" });
  }
}
