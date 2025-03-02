import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";

import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { textVariant } from "../../utils/motion";

const Works = () => {
  return (
    <>
      <div className="flex justify-between mr-10">
        <motion.div variants={textVariant()}>
          <div>
            {/* <p className={`${styles.sectionSubText} mt-10`}>My work</p> */}
            <h2 className={`${styles.sectionHeadText} flux`}>Github Stats</h2>
          </div>
        </motion.div>

        <div
          className="flex justify-between "
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <a
            href="https://github.com/0xwaya"
            target="_blank"
            rel="noreferrer"
            className={`${styles.sectionSubText} flex items-center`}
          >
            View More <AiOutlineArrowRight />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center">

        <div className="waya">
          <img
            width="100%"
            src="https://github-readme-stats.vercel.app/api?username=0xwaya&show_icons=true&theme=tokyonight"
          />
          <img
            width="100%"
            src="https://github-readme-streak-stats.herokuapp.com/?user=0xwaya&theme=tokyonight"
          />
        </div>
      </div>
    </>
  );
};

const WrappedWorks = SectionWrapper(Works, "");
export default WrappedWorks;