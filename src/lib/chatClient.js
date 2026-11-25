// Production calls the /api/chat serverless function so the Groq key never reaches the browser.
// `npm run dev` can use VITE_GROQ_API_KEY directly for local experiments.
import { SYSTEM_PROMPT } from "./portfolioPrompt";

const devKey = import.meta.env.DEV ? import.meta.env.VITE_GROQ_API_KEY : undefined;
const model = import.meta.env.VITE_GROQ_MODEL || "llama-3.3-70b-versatile";

export const modelLabel = model;

async function viaFunction(messages) {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || `Request failed (${res.status})`);
  return data.reply;
}

async function viaDevKey(messages) {
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${devKey}` },
    body: JSON.stringify({
      model,
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      max_tokens: 600,
      temperature: 0.4,
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data?.error?.message || `Request failed (${res.status})`);
  return data.choices?.[0]?.message?.content || "";
}

export async function askAssistant(messages) {
  try {
    const reply = devKey ? await viaDevKey(messages) : await viaFunction(messages);
    return reply || "No response from the model.";
  } catch (e) {
    return `The assistant is unavailable right now (${e.message}). You can still read the facts on this page or email admin@wayalabs.com.`;
  }
}
