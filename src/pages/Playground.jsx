import { useEffect, useRef, useState } from "react";
import { brand } from "../data/assets";
import { askAssistant, modelLabel } from "../lib/chatClient";

const GREETING = {
  role: "assistant",
  content:
    "Hi, I'm the assistant for this portfolio. Ask about Edward's WayaLabs work, projects, stack or credentials. I only know the facts wired into this page.",
};

const QUICK = [
  "What does WayaLabs build?",
  "Which work is live and which is research?",
  "What is the CEO Agent System?",
  "Which certifications are public?",
];

const Playground = () => {
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);
  const started = messages.length > 1;

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages, loading]);

  const send = async (text) => {
    const content = text.trim();
    if (!content || loading) return;
    const next = [...messages, { role: "user", content }];
    setMessages(next);
    setInput("");
    setLoading(true);
    const reply = await askAssistant(next.slice(1));
    setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    setLoading(false);
  };

  return (
    <section className="section">
      <p className="eyebrow">Playground</p>
      <h1 className="h2">Ask the portfolio</h1>
      <p className="lede">
        A small assistant grounded in the facts on this site. Answers come from {modelLabel} through a server-side
        function, so no API key is shipped to your browser.
      </p>

      <div className="card mt-8 flex max-w-3xl flex-col overflow-hidden">
        <div className="flex items-center gap-3 border-b border-line px-4 py-3">
          <img src={brand.wayalabsMark} alt="" width="32" height="32" className="h-8 w-8 rounded-lg" />
          <div>
            <p className="text-sm font-semibold text-white">Portfolio assistant</p>
            <p className="text-xs text-muted">Groq · {modelLabel}</p>
          </div>
          {started && (
            <button type="button" onClick={() => setMessages([GREETING])} className="btn-ghost ml-auto px-3 py-1.5 text-xs">
              Clear
            </button>
          )}
        </div>

        <div className="max-h-[28rem] min-h-[18rem] space-y-4 overflow-y-auto p-4" aria-live="polite">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <p
                className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-6 ${
                  m.role === "user" ? "bg-accent text-ink" : "border border-line bg-raised text-soft"
                }`}
              >
                {m.content}
              </p>
            </div>
          ))}
          {loading && (
            <p className="inline-block rounded-2xl border border-line bg-raised px-4 py-2.5 text-sm text-muted">Thinking…</p>
          )}
          <div ref={endRef} />
        </div>

        {!started && (
          <ul className="flex flex-wrap gap-2 px-4 pb-3">
            {QUICK.map((q) => (
              <li key={q}>
                <button type="button" onClick={() => send(q)} className="chip transition hover:text-white">
                  {q}
                </button>
              </li>
            ))}
          </ul>
        )}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="flex items-end gap-2 border-t border-line p-3"
        >
          <label htmlFor="chat-input" className="sr-only">
            Your question
          </label>
          <textarea
            id="chat-input"
            rows={1}
            value={input}
            disabled={loading}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send(input);
              }
            }}
            placeholder="Ask a question…"
            className="max-h-32 min-h-[2.75rem] flex-1 resize-none rounded-xl border border-line bg-raised px-4 py-3 text-sm text-white placeholder:text-muted"
          />
          <button type="submit" disabled={loading || !input.trim()} className="btn-primary disabled:opacity-40">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Playground;
