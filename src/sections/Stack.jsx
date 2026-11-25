import {
  SiCss3, SiDocker, SiEthereum, SiExpress, SiFastapi, SiFlask, SiFramer, SiGit, SiHtml5, SiIpfs,
  SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiOpenai, SiPostgresql, SiPython, SiReact,
  SiRedis, SiSocketdotio, SiSolidity, SiSupabase, SiTailwindcss, SiThreedotjs, SiTypescript,
  SiVercel, SiVite,
} from "react-icons/si";
import { HiOutlineBolt, HiOutlineCube, HiOutlineCpuChip, HiOutlineServerStack } from "react-icons/hi2";
import { skillGroups } from "../data/profile";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import hardhat from "../assets/tech/hardhat.webp";
import filecoin from "../assets/tech/filecoin.svg";
import langchain from "../assets/tech/langchain.svg";
import langgraph from "../assets/tech/langgraph.svg";

const icons = {
  Python: SiPython, TypeScript: SiTypescript, JavaScript: SiJavascript, Solidity: SiSolidity,
  HTML5: SiHtml5, CSS3: SiCss3, React: SiReact, "Next.js": SiNextdotjs, Vite: SiVite,
  "Tailwind CSS": SiTailwindcss, "Framer Motion": SiFramer, "Three.js": SiThreedotjs,
  "Node.js": SiNodedotjs, Express: SiExpress, Flask: SiFlask, FastAPI: SiFastapi,
  OpenAI: SiOpenai, "Socket.IO": SiSocketdotio, Ethereum: SiEthereum, "Ethers.js": SiEthereum,
  IPFS: SiIpfs, Supabase: SiSupabase, PostgreSQL: SiPostgresql, MongoDB: SiMongodb,
  Redis: SiRedis, Docker: SiDocker, Git: SiGit, Vercel: SiVercel,
  Ollama: HiOutlineCpuChip, Groq: HiOutlineBolt, OpenClaw: HiOutlineCube,
};
const images = { Hardhat: hardhat, Filecoin: filecoin, LangChain: langchain, LangGraph: langgraph };

const Glyph = ({ name }) => {
  const Icon = icons[name];
  if (Icon) return <Icon className="h-4 w-4 text-soft" aria-hidden="true" />;
  if (images[name]) return <img src={images[name]} alt="" className="h-4 w-4 object-contain" />;
  return <HiOutlineServerStack className="h-4 w-4 text-soft" aria-hidden="true" />;
};

const Stack = () => (
  <section id="stack" className="section">
    <SectionHeading eyebrow="Stack" title="Tools I work with">
      Python and TypeScript across the AI, web and data layers. Web3 tooling is earlier work and kept for context.
    </SectionHeading>

    <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map((g, i) => (
        <Reveal key={g.id} delay={i * 0.04} className="card p-6">
          <h3 className="text-sm font-semibold text-white">{g.label}</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {g.items.map((item) => (
              <li key={item} className="chip">
                <Glyph name={item} />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Stack;
