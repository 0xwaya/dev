import { useEffect } from "react";
import PropTypes from "prop-types";
import { AiOutlineGithub, AiOutlineClose } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";

const ProjectModal = ({ openModal, setOpenModal }) => {
  const { project } = openModal;

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setOpenModal({ state: false, project: null });
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [setOpenModal]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      onClick={() => setOpenModal({ state: false, project: null })}
    >
      <div
        className="relative bg-[#171721] rounded-2xl shadow-2xl max-w-lg w-full p-6 flex flex-col gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
          onClick={() => setOpenModal({ state: false, project: null })}
        >
          <AiOutlineClose size={22} />
        </button>

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-xl"
        />

        <div className="flex flex-col gap-2">
          <h3 className="text-white text-xl font-bold">{project.title}</h3>
          <p className="text-gray-400 text-sm">{project.date}</p>
          <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-1">
          {project.tags?.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full bg-[#854CE6]/20 text-[#854CE6] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-white bg-[#854CE6] px-4 py-2 rounded-lg hover:bg-[#6b3bbf] transition"
            >
              <AiOutlineGithub size={18} /> GitHub
            </a>
          )}
          {project.webapp && (
            <a
              href={project.webapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-white border border-[#854CE6] px-4 py-2 rounded-lg hover:bg-[#854CE6]/20 transition"
            >
              <HiOutlineExternalLink size={18} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

ProjectModal.propTypes = {
  openModal: PropTypes.shape({
    state: PropTypes.bool.isRequired,
    project: PropTypes.object,
  }).isRequired,
  setOpenModal: PropTypes.func.isRequired,
};

export default ProjectModal;
