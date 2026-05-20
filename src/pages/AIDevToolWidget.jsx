import { useState, useRef, useEffect } from "react";
import { callOllamaApi } from "./ollamaApi";
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
            const aiResponse = await callOllamaApi(input);
            setMessages((msgs) => [
                ...msgs,
                { role: "assistant", content: aiResponse }
            ]);
        } catch (err) {
            setMessages((msgs) => [
                ...msgs,
                { role: "assistant", content: "[Error contacting Ollama API]" }
            ]);
        }
        setLoading(false);
    };

    return (
        <div className="fixed bottom-8 right-8 w-80 max-w-[90vw] bg-white/90 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-200 flex flex-col z-50">
            <div className="p-4 font-bold text-lg text-primary border-b border-gray-100 flex items-center gap-3">
                {/* 3D Avatar */}
                <div className="w-12 h-12 shrink-0 rounded-full overflow-hidden bg-[#16161a] border border-gray-200">
                    <AIDevAvatar3D />
                </div>
                AI Dev Tool
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-2 max-h-72">
                {messages.map((msg, i) => (
                    <div key={i} className={`text-sm px-3 py-2 rounded-lg ${msg.role === "user" ? "bg-blue-100 text-right ml-8" : "bg-gray-100 text-left mr-8"}`}>
                        {msg.content}
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <form onSubmit={sendMessage} className="flex border-t border-gray-100">
                <input
                    className="flex-1 px-3 py-2 outline-none bg-transparent"
                    type="text"
                    placeholder="Ask a question..."
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    disabled={loading}
                />
                <button type="submit" className="px-4 py-2 text-primary font-bold disabled:opacity-50" disabled={loading || !input.trim()}>
                    Send
                </button>
            </form>
        </div>
    );
};

export default AIDevToolWidget;
