import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { HiOutlineArrowDownTray, HiOutlineArrowUpRight, HiOutlineMapPin } from "react-icons/hi2";
import { brand } from "../data/assets";
import { certifications, profile, projects, RESUME_PDF } from "../data/profile";
import Reveal from "../components/ui/Reveal";

const stats = [
  { value: projects.filter((p) => p.status === "live" && p.live).length, label: "live sites online" },
  { value: "16", label: "agents in the research orchestrator" },
  { value: "10", label: "years running a trade business" },
  { value: certifications.length, label: "certifications" },
];

const social = [
  { href: profile.links.linkedin.href, label: "LinkedIn", Icon: BsLinkedin },
  { href: profile.links.github.href, label: "GitHub", Icon: BsGithub },
  { href: profile.links.x.href, label: "X", Icon: BsTwitterX },
];

const Hero = () => (
  <section className="container-page pb-6 pt-14 sm:pt-20">
    <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_1fr]">
      <Reveal>
        <p className="inline-flex items-center gap-2 text-sm text-muted">
          <HiOutlineMapPin className="h-4 w-4" aria-hidden="true" />
          {profile.location} · also known as {profile.handle}
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>
        <p className="mt-3 text-xl font-medium text-soft sm:text-2xl">{profile.roleLong}</p>
        <p className="mt-6 max-w-xl text-lg leading-8 text-white">{profile.tagline}</p>
        <p className="mt-4 max-w-xl text-base leading-7 text-muted">{profile.summary}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href={RESUME_PDF} download className="btn-primary">
            <HiOutlineArrowDownTray className="h-4 w-4" aria-hidden="true" />
            Download résumé
          </a>
          <a href={profile.links.site.href} target="_blank" rel="noreferrer" className="btn-ghost">
            Visit WayaLabs
            <HiOutlineArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <ul className="ml-1 flex items-center gap-1">
            {social.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-xl text-muted transition hover:bg-white/5 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="relative mx-auto w-full max-w-sm">
        <div className="absolute -inset-4 rounded-[2rem] bg-accent/10 blur-3xl" aria-hidden="true" />
        <img
          src={brand.portrait}
          alt="Portrait of Edward Mercado"
          width="720"
          height="709"
          className="relative aspect-[4/4.4] w-full rounded-3xl border border-line object-cover object-top shadow-card"
        />
        <div className="absolute -bottom-5 left-4 right-4 flex items-center gap-3 rounded-2xl border border-line bg-surface/95 p-3 shadow-card backdrop-blur">
          <img src={brand.wayalabsMark} alt="" width="40" height="40" className="h-10 w-10 rounded-lg" />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white">WayaLabs</p>
            <p className="truncate text-xs text-muted">Chatbots, lead systems, platforms · agents in research</p>
          </div>
        </div>
      </Reveal>
    </div>

    <Reveal delay={0.15} className="mt-16">
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col-reverse justify-end bg-surface px-5 py-5">
            <dt className="mt-1 text-xs leading-5 text-muted">{s.label}</dt>
            <dd className="text-3xl font-semibold tracking-tight text-white">{s.value}</dd>
          </div>
        ))}
      </dl>
    </Reveal>
  </section>
);

export default Hero;
