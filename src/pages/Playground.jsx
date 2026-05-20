import { styles } from "../styles";
import AIDevToolWidget from "./AIDevToolWidget";

const Playground = () => {
  return (
    <div className="bg-primary min-h-screen">
      {/* Hero section */}
      <div className={`${styles.paddingX} max-w-7xl mx-auto pt-6 pb-4`}>
        <p className={styles.sectionSubText}>Experiments &amp; Demos</p>
        <h2 className={`${styles.sectionHeadText} flux`}>Playground.</h2>
        <p className="mt-3 text-secondary text-[16px] sm:text-[17px] leading-[28px] max-w-xl">
          Chat with an AI assistant powered by{" "}
          <span className="text-violet-400 font-semibold">Groq</span> &amp;{" "}
          <span className="text-violet-400 font-semibold">Llama 3.3</span>.
          Ask about code, web3, or anything in this portfolio.
        </p>
      </div>

      {/* Chat widget — inline, full-width on mobile */}
      <div className={`${styles.paddingX} max-w-7xl mx-auto pb-12`}>
        <AIDevToolWidget />
      </div>
    </div>
  );
};

export default Playground;
