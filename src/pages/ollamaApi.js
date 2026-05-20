// Get Groq API key from environment
export function getGroqApiKey() {
    const key = import.meta.env.VITE_GROQ_API_KEY;
    if (!key) {
        console.warn("⚠️ VITE_GROQ_API_KEY not configured in environment");
        console.warn("Make sure to add it to .env.local (local dev) or Vercel Settings → Environment Variables (production)");
        return null;
    }
    console.log("✓ Groq API key loaded");
    return key;
}

// Call Groq API for chat completions
export async function callOllamaApi(prompt) {
    const apiKey = getGroqApiKey();
    if (!apiKey) {
        return "🔐 API key not configured. Please add VITE_GROQ_API_KEY to environment variables (Vercel Dashboard → Settings → Environment Variables for production, or .env.local for local dev).";
    }

    const endpoint = "https://api.groq.com/openai/v1/chat/completions";
    try {
        const res = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: "mixtral-8x7b-32768",
                messages: [{ role: "user", content: prompt }],
                max_tokens: 512,
                temperature: 0.7,
            }),
        });

        if (!res.ok) {
            const error = await res.json();
            console.error("Groq API error:", error);
            const errorMsg = error.error?.message || "API request failed";
            if (errorMsg.includes("401") || errorMsg.includes("Unauthorized")) {
                return "🔑 Unauthorized: API key is invalid or expired. Check Vercel environment variables.";
            }
            return `[Error: ${errorMsg}]`;
        }

        const data = await res.json();
        return data.choices?.[0]?.message?.content || "[No response from API]";
    } catch (e) {
        console.error("Error calling Groq API:", e);
        return `[Network error: ${e.message}]`;
    }
}
