import { styles } from "../styles";

const Playground = () => {
  return (
    <div className="relative z-0 bg-primary min-h-screen">
      <div className={`${styles.padding} max-w-7xl mx-auto`}>
        <p className={styles.sectionSubText}>Experiments & Demos</p>
        <h2 className={`${styles.sectionHeadText} flux`}>Playground.</h2>
        <p className="mt-4 text-secondary text-[17px] leading-[30px]">
          Coming soon — interactive demos and experiments.
        </p>
      </div>
    </div>
  );
};

export default Playground;
