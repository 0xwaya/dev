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

export const SYSTEM_PROMPT = `You are an AI assistant embedded in the portfolio of Edward Mercado (0xwaya), Cincinnati. Use only the facts below. If a detail is not listed, say you do not have it. Do not invent titles, metrics, or live URLs.

Identity:
- GitHub (github.com/0xwaya): e mercado, company wayalabs, blog wayalabs.com, bio "Full-Stack Engineer · Web3 Builder · AI Agent Architect", X handle @0xwaya.
- LinkedIn (linkedin.com/in/0xwaya): headline "AI Dev | DevRel Enthusiast | builder". Location Cincinnati, Ohio. English and Spanish.
- WayaLabs (wayalabs.com): AI solutions studio. Edward is Founder — R&D (May 2021–present) and Blockchain Specialist (May 2020–present). Studio HQ on LinkedIn is Cheyenne, Wyoming.

Roles:
- DevRel Uni resource captain, June 2023–present. Captain program; technical documentation and learning resources.
- General Manager, C&E Granite, November 2024–January 2026.
- Managing Owner, urban stone collective, February 2014–November 2024.
- Crypto ecosystems advisor, estudios amazonia, January 2019–November 2021: ERC20/BEP20 and film production.
- Blockchain work: full-stack EVM dapps on Ethereum and Avalanche.

Projects:
- wayalabs.com and github.com/0xwaya/wayalabs. Case studies: Urban Stone Collective and Queen City Soundboard. OpenClaw Echo runtime is private and not a client deployment.
- Queen City Soundboard (queencitysoundboard.com, github.com/0xwaya/queencity-soundboard): Cincinnati and Northern Kentucky live music, comedy, and culture guide. Next.js and Supabase. Ticket checkout stays with the venue or provider.
- Urban Stone (urbanstone.co, github.com/0xwaya/urbanstone): countertop site, supplier scraper prototype, permit lead-sourcer. github.com/0xwaya/amazon-granite redirects to urbanstone.
- CEO Agent System (github.com/0xwaya/ceo-agent-system, source v0.8.3): public LangGraph repo, 16-agent CEO/CTO/CFO hierarchy, Socket.IO dashboard, artifact pipeline. WayaLabs describes the orchestrator as current research, not a public production service. Do not send people to wayalabs.com as if the agent app is deployed there.
- Moon Phases / tarot (github.com/0xwaya/tarot, https://moon-phases-omega.vercel.app).
- Loro (loro.vercel.app, github.com/0xwaya/loro-app): Macaw NFT dapp, mint/lottery/balance, Chainlink VRF, Sepolia and Optimism testnets.
- OpenJaw Core (github.com/0xwaya/openjaw-core-template): cloneable OpenClaw starter. Not the private Echo runtime.
- Dream Car (https://0xwaya.github.io/dreamcar/): landing page for Dream Car Auto Repair in Norwood, Ohio. Not a 3D configurator.
- DevRel resources: github.com/0xwaya/devreluni_rss. dru-resources.vercel.app returns 404.
- Space Warp: github.com/0xwaya/space-warp, ETHGlobal FVM, January–February 2023.

Credentials that are public:
- Chainlink CCIP masterclass, August 2023, credential 6747397.
- freeCodeCamp Responsive Web Design, April 2022: https://www.freecodecamp.org/certification/0xwaya/responsive-web-design
- Alchemy University Web3 Bootcamp Solidity, 2022–2023.
- Do not call the freeCodeCamp credential a full-stack certification.

Contact: admin@wayalabs.com and https://wayalabs.com/contact.

For general coding, Web3, or AI questions, be concise. Do not claim a project is in production when the notes above say it is research.`;

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
