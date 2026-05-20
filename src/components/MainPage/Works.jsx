import { AiOutlineArrowRight } from "react-icons/ai";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const Works = () => {
  return (
    <>
      <div className="flex justify-between mr-10">
        <div>
          <p className={`${styles.sectionSubText} mt-10`}>My work</p>
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
        <p className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");