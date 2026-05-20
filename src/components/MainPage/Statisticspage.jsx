import { motion } from "framer-motion";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { textVariant } from "../../utils/motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AnimatedTestimonials } from "../ui/animated-testimonals";
import { projects1 } from "../../constants";

const StatisticPage = () => {
  const testimonials = projects1.slice(0, 5).map((project) => ({
    quote: project.description,
    name: project.title,
    designation: project.category,
    src: project.image,
  }));

  const statCards = [
    {
      href: "https://github.com/0xwaya",
      src: "https://github-profile-summary-cards.vercel.app/api/cards/stats?username=0xwaya&theme=tokyonight",
      alt: "0xwaya GitHub stats summary card",
    },
    {
      href: "https://github.com/0xwaya?tab=repositories",
      src: "https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=0xwaya&theme=tokyonight",
      alt: "0xwaya top languages summary card",
    },
    {
      href: "https://github.com/0xwaya",
      src: "https://streak-stats.demolab.com?user=0xwaya&theme=tokyonight&hide_border=true&background=0d1117&ring=854CE6&fire=854CE6",
      alt: "0xwaya GitHub contribution streak",
    },
  ];

  return (
    <>
      <div className="mt-6 flex flex-col gap-4 sm:mt-2 sm:flex-row sm:items-end sm:justify-between">
        <motion.div variants={textVariant()}>
          <div>
            <p className={styles.sectionSubText}>Profile telemetry</p>
            <h2 className={`${styles.sectionHeadText} flux`}>Github Stats</h2>
            <p className="mt-3 max-w-2xl text-[16px] leading-[28px] text-secondary">
              Live GitHub cards mirrored from the README providers used in this repo.
              The old stats widgets were removed because they depended on stale endpoints
              and failed to render consistently.
            </p>
          </div>
        </motion.div>

        <div
          className="flex justify-between"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <a
            href="https://github.com/0xwaya"
            target="_blank"
            rel="noreferrer"
            className={`${styles.sectionSubText} flex items-center`}
          >
            View More <AiOutlineArrowRight />
          </a>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] xl:items-start">
        <div className="grid grid-cols-1 gap-5">
          {statCards.map((card) => (
            <a
              key={card.src}
              href={card.href}
              target="_blank"
              rel="noreferrer"
              className="overflow-hidden rounded-2xl border border-violet-900/30 bg-[#0d1117] shadow-[0_0_32px_rgba(133,76,230,0.08)] transition-transform duration-300 hover:-translate-y-1"
            >
              <img
                className="block h-auto w-full"
                src={card.src}
                alt={card.alt}
                loading="lazy"
              />
            </a>
          ))}

          <div className="flex flex-col gap-4 rounded-2xl border border-violet-900/30 bg-[#0d1117] p-5 sm:flex-row sm:items-center sm:justify-between">
            <img
              src="https://komarev.com/ghpvc/?username=0xwaya&color=854CE6&style=flat-square&label=Portfolio+Views"
              alt="0xwaya portfolio views"
            />
            <a
              href="https://github.com/0xwaya"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-tertiary px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-85"
            >
              Explore repositories
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-violet-900/30 bg-[#0d1117]/80">
          <AnimatedTestimonials testimonials={testimonials} />
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(StatisticPage, "");
