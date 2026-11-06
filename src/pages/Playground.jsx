import { styles } from "../styles";
import AIDevToolWidget from "./AIDevToolWidget";

const Playground = () => {
  return (
    <div className="bg-primary min-h-screen">
      {/* Hero section */}
      <div className={`${styles.paddingX} max-w-7xl mx-auto pt-6 pb-6`}>
        <p className={styles.sectionSubText}>AI Chat · Experiments</p>
        <h2 className={`${styles.sectionHeadText} flux`}>Playground.</h2>
        <p className="mt-3 text-secondary text-[16px] sm:text-[17px] leading-[28px] max-w-2xl">
          Ask about the public portfolio: WayaLabs, Queen City Soundboard,
          Urban Stone, the CEO agent research repo, or Web3 work. The assistant
          only knows the facts wired into this page.
        </p>

        {/* Feature pills */}
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "Multi-turn conversation",
            "Portfolio context",
            "Groq · llama-3.3-70b-versatile",
            "Enter to send",
          ].map((label) => (
            <span
              key={label}
              className="text-[11px] text-violet-300/70 bg-violet-900/20 border border-violet-800/30 rounded-full px-3 py-1"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Chat widget */}
      <div className={`${styles.paddingX} max-w-7xl mx-auto pb-16`}>
        <AIDevToolWidget />
      </div>
    </div>
  );
};

export default Playground;
