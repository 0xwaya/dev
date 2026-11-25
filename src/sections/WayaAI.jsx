import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { capabilities, process, profile, projects, statuses } from "../data/profile";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import StatusPill from "../components/ui/StatusPill";

const byId = Object.fromEntries(projects.map((p) => [p.id, p]));

const WayaAI = () => (
  <section id="ai" className="section">
    <SectionHeading eyebrow="WayaLabs · AI & engineering" title="What I build at WayaLabs">
      Chatbots, lead systems and platforms are live for local businesses. Multi-agent orchestration and sandboxed
      agent runtimes are research, labelled as such.
    </SectionHeading>

    <ul className="mt-6 flex flex-wrap gap-3 text-xs text-muted" aria-label="Status legend">
      {["live", "research"].map((k) => (
        <li key={k} className="flex items-center gap-2">
          <StatusPill status={k} />
          {statuses[k].hint}
        </li>
      ))}
    </ul>

    <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {capabilities.map((c, i) => {
        const project = c.project ? byId[c.project] : null;
        const link = project?.live || project?.caseStudy || project?.repo;
        return (
          <Reveal key={c.id} delay={i * 0.05} className="card flex flex-col p-6 transition hover:border-white/15">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold tracking-tight text-white">{c.title}</h3>
              <StatusPill status={c.status} />
            </div>
            <p className="mt-3 flex-1 text-sm leading-6 text-muted">{c.summary}</p>
            <ul className="mt-5 flex flex-wrap gap-1.5">
              {c.tags.map((t) => (
                <li key={t} className="chip">
                  {t}
                </li>
              ))}
            </ul>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-white"
              >
                {project.name}
                <HiOutlineArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
          </Reveal>
        );
      })}
    </div>

    <Reveal className="mt-14">
      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">Delivery process</h3>
      <ol className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {process.map((p) => (
          <li key={p.step} className="bg-surface p-5">
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-semibold text-accent">{p.step}</span>
              <span className="text-xs text-muted">{p.when}</span>
            </div>
            <p className="mt-3 font-semibold text-white">{p.title}</p>
            <p className="mt-1 text-sm leading-6 text-muted">{p.text}</p>
          </li>
        ))}
      </ol>
    </Reveal>

    <Reveal className="mt-10">
      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">Services</h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {profile.services.map((s) => (
          <li key={s} className="chip">
            {s}
          </li>
        ))}
      </ul>
    </Reveal>
  </section>
);

export default WayaAI;
