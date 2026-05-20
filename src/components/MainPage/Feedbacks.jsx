import { motion } from "framer-motion";
import PropTypes from 'prop-types';
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";

const FeedbackCard = ({ index, project }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-5 rounded-3xl xs:w-[320px] w-full"
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
    <div className={`mt-1 bg-abstract bg-cover bg-no-repeat bg-center rounded-[20px]`}>
      <div className={`rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My current Learnings</p>
          <h2 className={`${styles.sectionHeadText}`}>Certificates</h2>
        </motion.div>
        {/* Add FeedbackCard components here */}
      </div>
    </div>
  );
};

const WrappedFeedbacks = SectionWrapper(Feedbacks, "feedbacks");

const Testimonial = ({ testimonials }) => {
  return (
    <div className="bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white mb-8">Loved by the community</h2>
        <p className="text-gray-400 mb-12">Don&apos;t take our word for it - listen to what Vite community members have to say.</p>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start"
          style={{ gridAutoRows: "1fr" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ y: index % 2 === 0 ? 50 : -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700 w-full"
            >
              <div className="flex items-start">
                <div className="mr-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">{testimonial.name}</h3>
                  <p className="text-gray-400 break-all">{testimonial.message}</p>
                  <p className="text-gray-500 mt-2">@{testimonial.handle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

Testimonial.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      handle: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export { WrappedFeedbacks, Testimonial };