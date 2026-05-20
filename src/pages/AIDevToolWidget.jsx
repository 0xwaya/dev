import { useState, useRef, useEffect } from "react";
import { callGroqApi, getGroqModel } from "./groqApi";
import AIDevAvatar3D from "./AIDevAvatar3D";

const INITIAL_MESSAGE = {
    role: "assistant",
    content: "Hi! I'm an AI assistant for this portfolio. Ask me about Edward's projects, tech stack, experience — or any coding / web3 / AI question.",
};

const QUICK_PROMPTS = [
    "What are your main projects?",
    "Tell me about OpenJaw / OpenClaw",
    "What's your Web3 stack?",
    "What certifications do you have?",
    "What is your AI agent architecture?",
];

const MODEL_LABEL = getGroqModel();

const AIDevToolWidget = () => {
    const [messages, setMessages] = useState([INITIAL_MESSAGE]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);
    const textareaRef = useRef(null);

    const hasUserMessage = messages.some((m) => m.role === "user");

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // Auto-resize textarea
    useEffect(() => {
        const ta = textareaRef.current;
        if (!ta) return;
        ta.style.height = "auto";
        ta.style.height = `${Math.min(ta.scrollHeight, 120)}px`;
    }, [input]);

    const send = async (text) => {
        const trimmed = text.trim();
        if (!trimmed || loading) return;

        const userMsg = { role: "user", content: trimmed };
        const next = [...messages, userMsg];
        setMessages(next);
        setInput("");
        setLoading(true);

        // Pass only user/assistant turns to API (strip the initial assistant greeting for cleanliness)
        const history = next.filter((m) => m.role === "user" || m.role === "assistant");
        const aiText = await callGroqApi(history);

        setMessages((prev) => [...prev, { role: "assistant", content: aiText }]);
        setLoading(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        send(input);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            send(input);
        }
    };

    const clearChat = () => {
        setMessages([INITIAL_MESSAGE]);
        setInput("");
    };

    return (
        <div
            className="w-full max-w-2xl mx-auto bg-[#0d0d14] rounded-2xl border border-violet-900/60 flex flex-col overflow-hidden"
            style={{ boxShadow: "0 0 48px 6px rgba(124,58,237,0.15)" }}
        >
            {/* Header */}
            <div className="px-4 py-3 border-b border-violet-900/40 flex items-center gap-3 bg-[#13121f]">
                <div className="w-11 h-11 shrink-0 rounded-full overflow-hidden bg-[#1a1830] border border-violet-700/50">
                    <AIDevAvatar3D />
                </div>
                <div className="min-w-0">
                    <div className="font-bold text-sm text-white leading-tight">AI Dev Assistant</div>
                    <div className="text-[10px] text-violet-400 font-medium truncate">
                        Groq · {MODEL_LABEL}
                    </div>
                </div>
                <div className="ml-auto flex items-center gap-3 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow shadow-emerald-400/60" title="Online" />
                    {hasUserMessage && (
                        <button
                            onClick={clearChat}
                            className="text-[11px] text-gray-500 hover:text-gray-300 transition-colors px-2 py-1 rounded-lg hover:bg-white/5"
                            title="Clear chat"
                        >
                            Clear
                        </button>
                    )}
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[320px] max-h-[480px]">
                {messages.map((msg, i) => (
                    <div key={i} className={`flex flex-col gap-1 ${msg.role === "user" ? "items-end" : "items-start"}`}>
                        <span className="text-[10px] font-semibold tracking-widest uppercase px-1 text-gray-500">
                            {msg.role === "user" ? "You" : "Assistant"}
                        </span>
                        <div
                            className={`text-sm px-4 py-2.5 rounded-2xl leading-relaxed max-w-[85%] whitespace-pre-wrap ${msg.role === "user"
                                    ? "bg-violet-700 text-white rounded-br-sm"
                                    : "bg-[#1e1c30] text-gray-100 border border-violet-900/30 rounded-bl-sm"
                                }`}
                        >
                            {msg.content}
                        </div>
                    </div>
                ))}

                {loading && (
                    <div className="flex items-start gap-2">
                        <div className="bg-[#1e1c30] border border-violet-900/30 text-gray-400 text-sm px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1.5 items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-bounce [animation-delay:0ms]" />
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-bounce [animation-delay:150ms]" />
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-bounce [animation-delay:300ms]" />
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Quick-start prompts — shown until first user message */}
            {!hasUserMessage && (
                <div className="px-4 pb-3 flex flex-wrap gap-2">
                    {QUICK_PROMPTS.map((p) => (
                        <button
                            key={p}
                            onClick={() => send(p)}
                            className="text-[11px] text-violet-300 bg-violet-900/25 hover:bg-violet-800/40 border border-violet-800/40 rounded-full px-3 py-1 transition-colors"
                        >
                            {p}
                        </button>
                    ))}
                </div>
            )}

            {/* Input */}
            <form
                onSubmit={handleSubmit}
                className="flex items-end gap-2 border-t border-violet-900/40 bg-[#13121f] px-4 py-3"
            >
                <textarea
                    ref={textareaRef}
                    rows={1}
                    className="flex-1 px-4 py-2.5 outline-none bg-[#1e1c30] rounded-xl text-sm text-white placeholder-gray-500 border border-violet-900/30 focus:border-violet-500/70 transition-colors resize-none overflow-hidden leading-relaxed"
                    placeholder="Ask anything… (Enter to send, Shift+Enter for new line)"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={loading}
                />
                <button
                    type="submit"
                    className="px-4 py-2.5 bg-violet-700 hover:bg-violet-600 active:bg-violet-800 text-white text-sm font-semibold rounded-xl disabled:opacity-40 disabled:cursor-not-allowed transition-colors shrink-0"
                    disabled={loading || !input.trim()}
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default AIDevToolWidget;
