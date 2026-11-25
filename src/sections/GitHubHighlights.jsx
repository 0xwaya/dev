import { BsGithub } from "react-icons/bs";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { github, profile } from "../data/profile";
import Reveal from "../components/ui/Reveal";
import statsCard from "../assets/github/stats.webp";
import langsCard from "../assets/github/langs.webp";

const figures = [
  { label: "Public repos", value: github.repos },
  { label: "Commits", value: github.commits },
  { label: "Pull requests", value: github.pullRequests },
  { label: "Followers", value: github.followers },
];

const GitHubHighlights = () => (
  <section aria-labelledby="gh-title" className="container-page pb-6">
    <Reveal className="card grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_1.1fr]">
      <div>
        <p className="eyebrow inline-flex items-center gap-2">
          <BsGithub className="h-4 w-4" aria-hidden="true" /> GitHub
        </p>
        <h3 id="gh-title" className="mt-2 text-2xl font-semibold tracking-tight text-white">
          github.com/{profile.handle}
        </h3>
        <p className="mt-3 text-sm leading-6 text-muted">
          {github.bio} On GitHub since {github.joined}; main languages are {github.languages.join(", ")}. Snapshot
          from the profile README.
        </p>
        <dl className="mt-6 grid grid-cols-2 gap-3">
          {figures.map((f) => (
            <div key={f.label} className="flex flex-col-reverse rounded-xl border border-line bg-white/[0.02] px-4 py-3">
              <dt className="text-xs text-muted">{f.label}</dt>
              <dd className="text-2xl font-semibold text-white">{f.value}</dd>
            </div>
          ))}
        </dl>
        <a href={profile.links.github.href} target="_blank" rel="noreferrer" className="btn-ghost mt-6">
          Open GitHub profile <HiOutlineArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <img src={statsCard} alt="GitHub stats: 18 stars, 1.1k commits, 61 pull requests, 14 repositories contributed to" loading="lazy" width="900" height="529" className="w-full rounded-xl border border-line" />
        <img src={langsCard} alt="Top languages by repository: TypeScript, Solidity, JavaScript, MDX, Python" loading="lazy" width="900" height="529" className="w-full rounded-xl border border-line" />
      </div>
    </Reveal>
  </section>
);

export default GitHubHighlights;
