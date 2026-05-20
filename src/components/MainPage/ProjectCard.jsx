import { Tilt } from 'react-tilt';
import PropTypes from 'prop-types';
import { github } from "../../assets";

const ProjectCard = ({ index, name, description, tags, image, image2, source_code_link }) => {
  void index;
  return (
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className="waya bg-primary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 h-[60px] overflow-hidden text-secondary text-[14px]">{description}...</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
        <a
          href=""
          onClick={(e) => { e.preventDefault(); window.open(image2, "_blank"); }}
          className="relative inline-flex items-center justify-start py-2 pl-2 pr-2 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
        >
          <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
          <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
            Go To Web App
          </span>
        </a>
      </div>
    </Tilt>
  );
};

ProjectCard.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  })).isRequired,
  image: PropTypes.string.isRequired,
  image2: PropTypes.string.isRequired,
  source_code_link: PropTypes.string.isRequired,
};

export default ProjectCard;
