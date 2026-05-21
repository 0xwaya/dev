import { AiOutlineArrowRight } from "react-icons/ai";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const Works = () => {
  return (
    <div className="relative mt-1 overflow-hidden rounded-[24px] border border-white/5 bg-[linear-gradient(140deg,rgba(13,20,44,0.64)_0%,rgba(6,13,31,0.82)_55%,rgba(8,19,46,0.76)_100%)]">
      <div className="pointer-events-none absolute -left-16 top-12 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative rounded-2xl border border-white/5 px-6 py-10 sm:px-12 sm:py-14">
        <div className="mr-10 flex justify-between">
          <div className="space-y-2">
            <p className={styles.sectionSubText}>My work</p>
            <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
          </div>
          <div
            className="flex justify-between"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <Link to="/project" className={`${styles.sectionSubText} flex items-center`}>
              View More <AiOutlineArrowRight />
            </Link>
          </div>
        </div>

        <div className='w-full flex'>
          <p className='mt-3 max-w-3xl text-[17px] leading-[30px] text-secondary'>
            Following projects showcase my skills and experience through
            real-world examples of my work. Each project is briefly described with
            links to code repositories and live demos. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </p>
        </div>

        <div className='mt-10 flex flex-wrap gap-7'>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "");