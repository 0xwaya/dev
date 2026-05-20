import { useState, useRef, useEffect } from "react";
import { callGroqApi } from "./groqApi";
import AIDevAvatar3D from "./AIDevAvatar3D";

const AIDevToolWidget = () => {
    const [messages, setMessages] = useState([
        { role: "assistant", content: "Hi! I'm your AI dev assistant. Ask me anything about coding, web3, or this portfolio!" }
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        const userMsg = { role: "user", content: input };
        setMessages((msgs) => [...msgs, userMsg]);
        setLoading(true);
        setInput("");
        try {
            const aiResponse = await callGroqApi(input);
            setMessages((msgs) => [
                ...msgs,
                { role: "assistant", content: aiResponse }
            ]);
        } catch (err) {
            setMessages((msgs) => [
                ...msgs,
                { role: "assistant", content: "[Error contacting Groq API. Please try again.]" }
            ]);
        }
        setLoading(false);
    };

    return (
        <div className="fixed bottom-8 right-8 w-80 max-w-[90vw] bg-[#0d0d14] backdrop-blur-lg rounded-xl shadow-2xl border border-violet-900/60 flex flex-col z-50" style={{ boxShadow: "0 0 32px 4px rgba(124,58,237,0.18)" }}>
            {/* Header */}
            <div className="p-3 border-b border-violet-900/40 flex items-center gap-3 bg-[#13121f] rounded-t-xl">
                <div className="w-11 h-11 shrink-0 rounded-full overflow-hidden bg-[#1a1830] border border-violet-700/50">
                    <AIDevAvatar3D />
                </div>
                <div>
                    <div className="font-bold text-sm text-white leading-tight">AI Dev Assistant</div>
                    <div className="text-[11px] text-violet-400 font-medium">Powered by LLM</div>
                </div>
                <span className="ml-auto w-2 h-2 rounded-full bg-emerald-400 shadow shadow-emerald-400/60" title="Online" />
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-72 scrollbar-thin scrollbar-thumb-violet-900/50">
                {messages.map((msg, i) => (
                    <div key={i} className={`flex flex-col gap-1 ${msg.role === "user" ? "items-end" : "items-start"}`}>
                        <span className="text-[10px] font-semibold tracking-wide uppercase px-1 text-gray-500">
                            {msg.role === "user" ? "You" : "Assistant"}
                        </span>
                        <div className={`text-sm px-3 py-2 rounded-xl leading-relaxed max-w-[88%] ${msg.role === "user"
                            ? "bg-violet-700/80 text-white rounded-br-sm"
                            : "bg-[#1e1c30] text-gray-100 border border-violet-900/30 rounded-bl-sm"
                            }`}>
                            {msg.content}
                        </div>
                    </div>
                ))}
                {loading && (
                    <div className="flex items-start gap-2">
                        <div className="bg-[#1e1c30] border border-violet-900/30 text-gray-400 text-sm px-3 py-2 rounded-xl rounded-bl-sm flex gap-1 items-center">
                            <span className="animate-bounce delay-0">·</span>
                            <span className="animate-bounce delay-75">·</span>
                            <span className="animate-bounce delay-150">·</span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={sendMessage} className="flex items-center gap-2 border-t border-violet-900/40 bg-[#13121f] rounded-b-xl px-3 py-2">
                <input
                    className="flex-1 px-2 py-1.5 outline-none bg-[#1e1c30] rounded-lg text-sm text-white placeholder-gray-500 border border-violet-900/30 focus:border-violet-600/60 transition-colors"
                    type="text"
                    placeholder="Ask anything..."
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    disabled={loading}
                />
                <button
                    type="submit"
                    className="px-3 py-1.5 bg-violet-700 hover:bg-violet-600 text-white text-sm font-semibold rounded-lg disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    disabled={loading || !input.trim()}
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default AIDevToolWidget;
