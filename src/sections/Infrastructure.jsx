import { HiOutlineArrowRight, HiOutlineArrowUpRight, HiOutlineArrowDown } from "react-icons/hi2";
import { infrastructure as infra } from "../data/profile";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import StatusPill from "../components/ui/StatusPill";

const Arrow = () => (
  <>
    <HiOutlineArrowDown className="mx-auto h-5 w-5 shrink-0 self-center text-accent lg:hidden" aria-hidden="true" />
    <HiOutlineArrowRight className="hidden h-5 w-5 shrink-0 self-center text-accent lg:block" aria-hidden="true" />
  </>
);

const Infrastructure = () => (
  <section id="infrastructure" className="section">
    <SectionHeading eyebrow="Production backend" title={infra.title}>
      {infra.intro}
    </SectionHeading>

    <div className="mt-4 flex flex-wrap items-center gap-3">
      <StatusPill status="live" />
      <a href={infra.live} target="_blank" rel="noreferrer" className="btn-ghost">
        urbanstone.co
        <HiOutlineArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </a>
      <a href={infra.caseStudy} target="_blank" rel="noreferrer" className="btn-ghost">
        Case study
        <HiOutlineArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </div>

    <Reveal className="mt-10">
      <h3 className="sr-only">Lead flow</h3>
      <div className="flex flex-col gap-3 lg:flex-row lg:items-stretch">
        <ul className="grid shrink-0 grid-cols-2 gap-2 lg:w-60 lg:grid-cols-1" aria-label="Inputs">
          {infra.inputs.map((i) => (
            <li key={i.label} className="card px-4 py-3">
              <p className="text-sm font-semibold text-white">{i.label}</p>
              <p className="text-xs text-muted">{i.note}</p>
            </li>
          ))}
        </ul>
        <Arrow />
        <ol className="grid flex-1 gap-3 lg:grid-cols-3">
          {infra.pipeline.map((p, i) => (
            <li key={p.title} className="card relative flex flex-col p-5">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                {String(i + 1).padStart(2, "0")} · {p.step}
              </span>
              <p className="mt-2 text-base font-semibold text-white">{p.title}</p>
              <p className="mt-1 text-sm leading-6 text-muted">{p.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </Reveal>

    <div className="mt-6 grid gap-5 md:grid-cols-2">
      {infra.modules.map((m, i) => (
        <Reveal key={m.title} delay={i * 0.05} className="card flex flex-col p-6 transition hover:border-white/15">
          <h3 className="text-lg font-semibold tracking-tight text-white">{m.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-6 text-muted">{m.text}</p>
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {m.tags.map((t) => (
              <li key={t} className="chip">
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>

    <p className="mt-5 text-xs text-muted">{infra.note}</p>
  </section>
);

export default Infrastructure;
