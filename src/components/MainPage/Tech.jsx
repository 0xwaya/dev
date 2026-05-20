import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import PropTypes from 'prop-types';
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { styles } from "../../styles";

const TechCard = ({ index, icon: Icon, name }) => {
  const initials = name
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <Tilt className="w-28 h-28" options={{ max: 45, scale: 1, speed: 450 }}>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className=" w-full green-pink-gradient p-[1px] rounded-full shadow-card select-none"
      >
        <div className="bg-tertiary rounded-full py-5 flex justify-evenly items-center flex-col gap-1 h-full text-center">
          {Icon ? (
            <Icon className="text-4xl text-white" aria-hidden="true" />
          ) : (
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm font-bold tracking-[0.2em] text-white/90">
              {initials}
            </span>
          )}
          <span className="px-2 text-[10px] font-medium leading-tight text-secondary">
            {name}
          </span>
        </div>
      </motion.div>
    </Tilt>
  );
};
TechCard.propTypes = {
  index: PropTypes.number.isRequired,
  icon: PropTypes.elementType,
  name: PropTypes.string.isRequired,
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My Stack</p>
        <h2 className={`${styles.sectionHeadText} text-center flux `}>
          Technologies.
        </h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
        {technologies.map((technology, index) => (
          <TechCard
            icon={technology.icon}
            key={technology.name}
            name={technology.name}
            index={index}
          />
        ))}
      </div>


      {/* <div className="flex flex-wrap  justify-center gap-10 mt-10 w-50">
  {technologies.map((technology) => (
    <div
      key={technology.name}
      className="relative group w-24 h-24 rounded-xl bg-gray-800 flex items-center justify-center transition-all duration-300"
    >
    
      <div className="absolute inset-0 rounded-xl opacity-0 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 blur-lg transition-all duration-300 group-hover:opacity-100"></div>

   
      <div className="z-10 text-white">
        <TechCard icon={technology.icon} />
      </div>

     
      <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-purple-500 group-hover:shadow-[0_0_20px_rgba(128,0,255,0.7)] transition-all duration-300"></div>
    </div>
  ))}
</div> */}



    </>
  );
};

const WrappedTech = SectionWrapper(Tech, "tech");

export default WrappedTech;
