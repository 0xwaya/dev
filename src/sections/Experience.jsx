import { earlier, experience } from "../data/profile";
import { logos } from "../data/assets";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";

const Logo = ({ name, company }) =>
  name ? (
    <img src={logos[name]} alt="" width="48" height="48" className="h-12 w-12 shrink-0 rounded-xl border border-line bg-black object-contain" />
  ) : (
    <span
      aria-hidden="true"
      className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-line bg-raised text-sm font-semibold text-soft"
    >
      {company
        .split(/\s+/)
        .slice(0, 2)
        .map((w) => w[0])
        .join("")}
    </span>
  );

const Experience = () => (
  <section id="experience" className="section">
    <SectionHeading eyebrow="Experience" title="Where I have worked">
      Current studio work and the production systems I run.
    </SectionHeading>

    <ol className="mt-10 space-y-5">
      {experience.map((job, i) => (
        <Reveal key={job.id} as="li" delay={i * 0.04} className="card p-6 sm:p-7">
          <div className="flex items-start gap-4">
            <Logo name={job.logo} company={job.company} />
            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-semibold tracking-tight text-white">{job.company}</h3>
              {job.place && <p className="text-sm text-muted">{job.place}</p>}
              <ul className="mt-2 space-y-0.5">
                {job.roles.map((r) => (
                  <li key={r.title} className="flex flex-wrap items-baseline justify-between gap-x-4 text-sm">
                    <span className="font-medium text-soft">{r.title}</span>
                    <span className="text-muted">{r.dates}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-6 text-muted marker:text-white/20">
            {job.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {job.skills.map((s) => (
              <li key={s} className="chip">
                {s}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </ol>

    <Reveal className="mt-12">
      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">Earlier roles</h3>
      <ul className="mt-4 divide-y divide-line rounded-2xl border border-line bg-surface">
        {earlier.map((e) => (
          <li key={e.title + e.org} className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <p className="text-sm font-medium text-white">
                {e.title} <span className="font-normal text-muted">· {e.org}</span>
              </p>
              {e.note && <p className="text-xs text-muted">{e.note}</p>}
            </div>
            <p className="shrink-0 text-xs text-muted">{e.dates}</p>
          </li>
        ))}
      </ul>
    </Reveal>
  </section>
);

export default Experience;
