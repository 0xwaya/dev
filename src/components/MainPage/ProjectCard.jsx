import { Tilt } from 'react-tilt';
import PropTypes from 'prop-types';
import { github } from "../../assets";

const ProjectCard = ({ index, name, description, tags, image, image2, source_code_link }) => {
  void index;
  return (
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className="w-full sm:w-[360px]"
    >
      <div className="group relative w-full cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(130%_130%_at_0%_0%,rgba(56,189,248,0.2)_0%,rgba(16,13,37,0.94)_48%,rgba(5,8,22,0.98)_100%)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300/60 hover:shadow-[0_24px_70px_-32px_rgba(56,189,248,0.8)]">
        <div className="pointer-events-none absolute -left-10 top-0 h-24 w-24 rounded-full bg-cyan-300/20 blur-2xl" />
        <div className="pointer-events-none absolute -right-12 -top-8 h-28 w-28 rounded-full bg-indigo-400/20 blur-2xl" />

        <div className="relative h-[230px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(56,189,248,0.18)_0%,rgba(15,23,42,0.24)_100%)]">
          <img
            src={image}
            alt="project_image"
            className="h-full w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />

          <div className="absolute inset-0 m-3 flex justify-end card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-[#050816]/80 backdrop-blur-sm transition-colors hover:border-sky-300/60"
            >
              <img src={github} alt="source code" className="h-1/2 w-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-[24px] font-bold text-white">{name}</h3>
          <p className="mt-2 h-[60px] overflow-hidden text-[14px] text-secondary">{description}...</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[12px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

        <div className="mt-4 flex justify-end">
          <a
            href=""
            onClick={(e) => { e.preventDefault(); window.open(image2, "_blank"); }}
            className="inline-flex items-center rounded-full border border-sky-300/50 bg-[linear-gradient(120deg,rgba(56,189,248,0.2)_0%,rgba(99,102,241,0.24)_100%)] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-sky-100 transition-all duration-200 hover:border-sky-200 hover:text-white"
          >
            Go To Web App
          </a>
        </div>
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
