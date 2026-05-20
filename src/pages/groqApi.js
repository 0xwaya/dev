// Get Groq API key from environment
export function getGroqApiKey() {
    const key = import.meta.env.VITE_GROQ_API_KEY;
    if (!key) {
        console.warn("VITE_GROQ_API_KEY not configured in environment");
        console.warn("Add it to .env.local (local dev) or Vercel Settings -> Environment Variables (production)");
        return null;
    }
    return key;
}

export function getGroqModel() {
    return import.meta.env.VITE_GROQ_MODEL || "llama-3.3-70b-versatile";
}

export const SYSTEM_PROMPT = `You are an AI assistant embedded in the portfolio of Edward Mercado (alias: 0xwaya), a full-stack developer and AI architect.

About Edward:
- Founder of wayalabs and creator of OpenJaw/OpenClaw — a hybrid autonomous agent platform built with LangGraph. CEO/CTO/CFO hierarchy with 16 specialized agents, real-time SocketIO dashboard, artifact pipeline, and Telegram integration.
- Web3/blockchain: Solidity, Chainlink CCIP & Functions (certified), ERC20/BEP20, DeFi, NFTs (Loro Dapp / Pandemonium Squad on Polygon testnet).
- Full-stack: React, Next.js, TypeScript, Python, FastAPI, Flask, Node.js, Express, Supabase, PostgreSQL, MongoDB, Redis, Docker.
- AI/ML: LangGraph, LangChain, OpenAI API, multi-agent orchestration, autonomous execution pipelines.
- Projects: CEO Agent System (wayalabs.com), QueenCity Soundboard (queencitysoundboard.com), UrbanStone/Amazon Granite (urbanstone.co), RadarTV, Loro NFT Dapp, DreamCar 3D Configurator, DevRel Resources Hub.
- Certifications: Chainlink CCIP, Chainlink Functions, ETHDenver Camp BUIDL, Solidity (Alchemy University), DevRel (DevRel Uni), Full-Stack Web Dev (freeCodeCamp).
- Experience: DevRel Uni Resource Captain, Crypto Ecosystems Advisor, Simultaneous Interpreter (EN/ES), Delta Air Lines Sales.
- Bilingual: English and Spanish.

When answering questions about this portfolio, be specific and accurate using the context above. For general coding, web3, or AI questions, be concise and practical. Keep responses focused — avoid unnecessary padding.`;

// Call Groq API for chat completions
// messages: array of {role: "user"|"assistant", content: string}
export async function callGroqApi(messages) {
    const apiKey = getGroqApiKey();
    const model = getGroqModel();
    if (!apiKey) {
        return "API key not configured. Add VITE_GROQ_API_KEY to environment variables (Vercel Dashboard -> Settings -> Environment Variables for production, or .env.local for local dev).";
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
                messages: [
                    { role: "system", content: SYSTEM_PROMPT },
                    ...messages,
                ],
                max_tokens: 800,
                temperature: 0.7,
            }),
        });

        if (!res.ok) {
            const error = await res.json();
            console.error("Groq API error:", error);
            const errorMsg = error.error?.message || "API request failed";
            if (errorMsg.includes("401") || errorMsg.includes("Unauthorized")) {
                return "Unauthorized: API key is invalid or expired. Check Vercel environment variables.";
            }
            if (errorMsg.includes("decommissioned") || errorMsg.includes("no longer supported")) {
                return `The configured Groq model "${model}" is no longer supported. Update VITE_GROQ_MODEL to a current model such as llama-3.3-70b-versatile.`;
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
