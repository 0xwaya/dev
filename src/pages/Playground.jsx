import { styles } from "../styles";
import AIDevToolWidget from "./AIDevToolWidget";

const Playground = () => {
  return (
    <div className="relative z-0 bg-primary min-h-screen">
      <div className={`${styles.padding} max-w-7xl mx-auto`}>
        <p className={styles.sectionSubText}>Experiments & Demos</p>
        <h2 className={`${styles.sectionHeadText} flux`}>Playground.</h2>
        <p className="mt-4 text-secondary text-[17px] leading-[30px]">
          Try the new <span className="font-bold text-primary">AI Dev Tool</span> below!
        </p>
      </div>
      <AIDevToolWidget />
    </div>
  );
};

export default Playground;
