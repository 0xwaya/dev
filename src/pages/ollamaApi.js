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

export function getGroqModel() {
    return import.meta.env.VITE_GROQ_MODEL || "llama-3.3-70b-versatile";
}

// Call Groq API for chat completions
export async function callOllamaApi(prompt) {
    const apiKey = getGroqApiKey();
    const model = getGroqModel();
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
                model,
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
            if (errorMsg.includes("decommissioned") || errorMsg.includes("no longer supported")) {
                return `⚠️ The configured Groq model "${model}" is no longer supported. Update VITE_GROQ_MODEL or use a current Groq model such as llama-3.3-70b-versatile.`;
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
