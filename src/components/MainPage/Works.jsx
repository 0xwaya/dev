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

      <div className="relative rounded-2xl border border-white/5 px-5 py-8 sm:px-10 sm:py-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <p className={styles.sectionSubText}>Selected work</p>
            <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
          </div>
          <Link
            to="/project"
            onClick={() => window.scrollTo(0, 0)}
            className={`${styles.sectionSubText} inline-flex items-center gap-1`}
          >
            View all <AiOutlineArrowRight />
          </Link>
        </div>

        <p className="mt-4 max-w-3xl text-[16px] leading-8 text-secondary">
          Current public work from WayaLabs, GitHub, and the live sites those
          repos point at. Repositories without a public app link to source only.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "");