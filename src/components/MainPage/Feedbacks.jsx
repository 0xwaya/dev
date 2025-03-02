import { motion } from "framer-motion";
import PropTypes from 'prop-types';
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";

const FeedbackCard = ({
  index,
  project,

}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200  p-5 rounded-3xl xs:w-[320px] w-full "
  >
    <p className="text-white font-black text-[20px]">{project}</p>

  </motion.div>

);
FeedbackCard.propTypes = {
  index: PropTypes.number.isRequired,
  project: PropTypes.string.isRequired,
};

const Feedbacks = () => {
  return (
    <div
      className={`mt-1 bg-abstract bg-cover bg-no-repeat bg-center rounded-[20px]`}
    >
      <div className={` rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My current Learnings</p>
          <h2 className={`${styles.sectionHeadText} `}>Certificates</h2>
        </motion.div>
      </div>
    </div>
  );
};

const WrappedFeedbacks = SectionWrapper(Feedbacks, "");
export default WrappedFeedbacks;
