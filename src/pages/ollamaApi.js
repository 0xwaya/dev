// Get Groq API key from environment
export function getGroqApiKey() {
    const key = import.meta.env.VITE_GROQ_API_KEY;
    if (!key) {
        console.error("VITE_GROQ_API_KEY not found in environment");
        return null;
    }
    return key;
}

// Call Groq API for chat completions
export async function callOllamaApi(prompt) {
    const apiKey = getGroqApiKey();
    if (!apiKey) {
        return "[Error: Groq API key not configured]";
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
                model: "mixtral-8x7b-32768", // Fast Groq model, great for portfolio
                messages: [{ role: "user", content: prompt }],
                max_tokens: 512,
                temperature: 0.7,
            }),
        });

        if (!res.ok) {
            const error = await res.json();
            console.error("Groq API error:", error);
            return `[Error: ${error.error?.message || "API request failed"}]`;
        }

        const data = await res.json();
        return data.choices?.[0]?.message?.content || "[No response]";
    } catch (e) {
        console.error("Error calling Groq API:", e);
        return "[Error contacting Groq API]";
    }
}
