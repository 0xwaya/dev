import { useState } from "react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { BsGithub } from "react-icons/bs";
import { projects } from "../data/profile";
import { shots } from "../data/assets";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import StatusPill from "../components/ui/StatusPill";

const filters = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI" },
  { id: "web", label: "Web" },
  { id: "web3", label: "Web3" },
];

const ProjectCard = ({ project, index }) => {
  const primary = project.live || project.caseStudy || project.repo;
  return (
    <Reveal delay={(index % 3) * 0.05} as="article" className="card group flex flex-col overflow-hidden transition hover:border-white/15">
      <a
        href={primary}
        target="_blank"
        rel="noreferrer"
        tabIndex={-1}
        aria-hidden="true"
        className="relative block aspect-[16/10] overflow-hidden border-b border-line bg-raised"
      >
        <img
          src={shots[project.image]}
          alt=""
          loading="lazy"
          width="1200"
          height="750"
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
        />
      </a>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold tracking-tight text-white">{project.name}</h3>
          <StatusPill status={project.status} />
        </div>
        <p className="mt-2 flex-1 text-sm leading-6 text-muted">{project.blurb}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium">
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-accent hover:text-white">
              Live site <HiOutlineArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
          {project.caseStudy && (
            <a href={project.caseStudy} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-accent hover:text-white">
              Case study <HiOutlineArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-muted hover:text-white">
              <BsGithub className="h-4 w-4" aria-hidden="true" /> Source
            </a>
          )}
          {project.note && <span className="text-xs text-muted">{project.note}</span>}
        </div>
      </div>
    </Reveal>
  );
};

const Work = () => {
  const [filter, setFilter] = useState("all");
  const visible = projects.filter((p) => filter === "all" || p.category === filter);

  return (
    <section id="work" className="section">
      <SectionHeading eyebrow="Selected work" title="Projects and repositories">
        Live client work first, then research, templates and earlier builds. Thumbnails are snapshots of the live
        sites and case studies.
      </SectionHeading>

      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            aria-pressed={filter === f.id}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
              filter === f.id
                ? "border-white bg-white text-ink"
                : "border-line bg-white/[0.03] text-muted hover:text-white"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Work;
