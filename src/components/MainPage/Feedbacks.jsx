import { motion } from "framer-motion";
import PropTypes from 'prop-types';
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { certificates } from "../../constants";

const CertCard = ({ index, project, company, designation, image, source_code_link }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.15, 0.75)}
    className="group relative w-full cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(120%_120%_at_0%_0%,rgba(99,102,241,0.24)_0%,rgba(16,13,37,0.94)_45%,rgba(5,8,22,0.98)_100%)] p-5 xs:w-[320px] transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300/60 hover:shadow-[0_24px_70px_-30px_rgba(129,140,248,0.85)]"
    onClick={() => window.open(source_code_link, "_blank")}
  >
    <div className="pointer-events-none absolute -left-8 top-0 h-24 w-24 rounded-full bg-indigo-400/20 blur-2xl transition-opacity duration-300 group-hover:opacity-90" />
    <div className="pointer-events-none absolute -right-10 -top-8 h-28 w-28 rounded-full bg-cyan-300/10 blur-2xl" />

    <div className="relative mb-4 h-[160px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(99,102,241,0.22)_0%,rgba(15,23,42,0.2)_100%)]">
      <img
        src={image}
        alt={project}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
        onError={(e) => { e.target.src = "https://opengraph.githubassets.com/1/0xwaya"; }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
    </div>

    <p className="text-[18px] font-black leading-tight text-white">{project}</p>
    <p className="mt-1 text-[13px] text-indigo-200/90">{designation}</p>
    <p className="mt-2 line-clamp-2 text-[13px] text-white-100/85">{company}</p>
  </motion.div>
);

CertCard.propTypes = {
  index: PropTypes.number.isRequired,
  project: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  source_code_link: PropTypes.string.isRequired,
};

const Feedbacks = () => {
  return (
    <div className="relative mt-1 overflow-hidden rounded-[24px] border border-white/5 bg-abstract bg-cover bg-center bg-no-repeat">
      <div className="pointer-events-none absolute -left-12 top-12 h-44 w-44 rounded-full bg-indigo-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-8 h-56 w-56 rounded-full bg-sky-400/10 blur-3xl" />

      <div className={`relative rounded-2xl bg-[linear-gradient(140deg,rgba(26,17,58,0.76)_0%,rgba(7,10,28,0.88)_55%,rgba(6,18,45,0.78)_100%)] ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()} className="space-y-2">
          <p className={styles.sectionSubText}>Credentials & Learning</p>
          <h2 className={`${styles.sectionHeadText}`}>Certificates.</h2>
        </motion.div>

        <div className="mt-10 flex flex-wrap gap-7">
          {certificates.map((cert, index) => (
            <CertCard key={`cert-${index}`} index={index} {...cert} />
          ))}
        </div>
      </div>
    </div>
  );
};

const WrappedFeedbacks = SectionWrapper(Feedbacks, "feedbacks");

export { WrappedFeedbacks };
export default Feedbacks;
