import { motion } from "framer-motion";
import PropTypes from 'prop-types';
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { certificates } from "../../constants";

const CertCard = ({ index, project, company, designation, image, source_code_link }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.15, 0.75)}
    className="bg-black-200 p-5 rounded-3xl xs:w-[320px] w-full cursor-pointer hover:scale-[1.02] transition-transform"
    onClick={() => window.open(source_code_link, "_blank")}
  >
    <div className="relative w-full h-[160px] mb-4 overflow-hidden rounded-2xl">
      <img
        src={image}
        alt={project}
        className="w-full h-full object-cover"
        onError={(e) => { e.target.src = "https://opengraph.githubassets.com/1/0xwaya"; }}
      />
    </div>
    <p className="text-white font-black text-[18px] leading-tight">{project}</p>
    <p className="text-secondary text-[13px] mt-1">{designation}</p>
    <p className="text-white-100 text-[13px] mt-2 line-clamp-2">{company}</p>
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
    <div className="mt-1 bg-abstract bg-cover bg-no-repeat bg-center rounded-[20px]">
      <div className={`rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
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
