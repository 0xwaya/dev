// Utility to fetch OLLAMA API key from .env files (for dev only)
export async function getOllamaApiKey() {
    // In a real app, never expose secrets to the client!
    // For local dev, fetch from a secure endpoint or env var.
    // Here, we hardcode for demo (replace with secure fetch in prod)
    return "b318b14aa01e43faba8b4c444650a19e.t_XaHz9Xjlh0V4AG7FIs3h1V";
}

// Call Ollama API (mock for now)
export async function callOllamaApi(prompt) {
    const apiKey = await getOllamaApiKey();
    // Example: POST to Ollama or OpenAI-compatible endpoint
    // Replace with your Ollama endpoint if self-hosted
    const endpoint = "https://api.ollama.com/v1/chat/completions";
    try {
        const res = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: "llama3", // or your deployed model name
                messages: [{ role: "user", content: prompt }],
                max_tokens: 256,
                temperature: 0.7,
            }),
        });
        const data = await res.json();
        return data.choices?.[0]?.message?.content || "[No response]";
    } catch (e) {
        return "[Error contacting Ollama API]";
    }
}
