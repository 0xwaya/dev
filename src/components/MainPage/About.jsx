import { Tilt } from "react-tilt";
import PropTypes from 'prop-types';
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const services = [
  {
    title: "AI Agent Architect",
    glyph: "🧠",
    gradient: "from-violet-900/80 via-purple-800/60 to-indigo-900/80",
    accent: "#a78bfa",
    sub: "LangGraph · Multi-Agent · Autonomous Systems",
  },
  {
    title: "Full-Stack Developer",
    glyph: "⚡",
    gradient: "from-sky-900/80 via-cyan-800/60 to-teal-900/80",
    accent: "#38bdf8",
    sub: "React · Next.js · Node · Python",
  },
  {
    title: "Web3 / Smart Contracts",
    glyph: "🔗",
    gradient: "from-amber-900/80 via-orange-800/60 to-yellow-900/80",
    accent: "#fbbf24",
    sub: "Solidity · Hardhat · Ethers.js · IPFS",
  },
  {
    title: "Developer Relations",
    glyph: "📡",
    gradient: "from-rose-900/80 via-pink-800/60 to-fuchsia-900/80",
    accent: "#f472b6",
    sub: "Chainlink · Filecoin · Community",
  },
];

const ServiceCard = ({ title, glyph, gradient, accent, sub, index }) => (
  <Tilt
    className="xs:w-[260px] w-full"
    options={{ max: 18, scale: 1.04, speed: 400 }}
  >
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.6)}
      className={`relative overflow-hidden rounded-2xl min-h-[290px] bg-gradient-to-br ${gradient} border border-white/10 shadow-2xl flex flex-col justify-between p-7 group`}
    >
      {/* Glow ring */}
      <div
        className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-3xl opacity-30 transition-opacity duration-500 group-hover:opacity-60"
        style={{ background: accent }}
      />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(0deg,transparent 24%,rgba(255,255,255,.6) 25%,rgba(255,255,255,.6) 26%,transparent 27%,transparent 74%,rgba(255,255,255,.6) 75%,rgba(255,255,255,.6) 76%,transparent 77%),linear-gradient(90deg,transparent 24%,rgba(255,255,255,.6) 25%,rgba(255,255,255,.6) 26%,transparent 27%,transparent 74%,rgba(255,255,255,.6) 75%,rgba(255,255,255,.6) 76%,transparent 77%)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
      />

      {/* Glyph */}
      <div
        className="text-5xl select-none drop-shadow-lg"
        style={{ filter: `drop-shadow(0 0 12px ${accent}88)` }}
      >
        {glyph}
      </div>

      {/* Text block */}
      <div className="relative z-10">
        <h3 className="text-white text-[22px] font-bold leading-tight mb-2">
          {title}
        </h3>
        <p className="text-white/50 text-xs tracking-widest uppercase">
          {sub}
        </p>
      </div>
    </motion.div>
  </Tilt>
);

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  glyph: PropTypes.string.isRequired,
  gradient: PropTypes.string.isRequired,
  accent: PropTypes.string.isRequired,
  sub: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

const About = () => {
  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {services.map((service, index) => (
        <ServiceCard key={service.title} {...service} index={index} />
      ))}
    </div>
  );
};

export default About;

