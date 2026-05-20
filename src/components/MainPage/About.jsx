import { Tilt } from "react-tilt";
import PropTypes from 'prop-types';

const ServiceCard = ({ title, icon }) => (
  <Tilt
    className="xs:w-[250px] w-full transition-all"
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
  >
    <div
      className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex 
      justify-evenly items-center flex-col"
    >
      <img
        src={icon}
        alt="web-development"
        className="w-16 h-16 object-contain"
      />

      <h3 className="text-white text-[20px] font-bold text-center">
        {title}
      </h3>
    </div>
  </Tilt>
);


const services = [
  { title: "Web Development", icon: "path/to/web-development-icon.png" },
  { title: "App Development", icon: "path/to/app-development-icon.png" },
  // Add more services as needed
];

const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};
ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  index: PropTypes.number,
};

export default About;