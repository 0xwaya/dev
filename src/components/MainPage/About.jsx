import { Tilt } from "react-tilt";
import PropTypes from 'prop-types';
import { web, backend, creator, mobile } from "../../assets";

const services = [
  {
    title: "AI Agent Architect",
    icon: creator,
  },
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Web3 / Smart Contracts",
    icon: backend,
  },
  {
    title: "Developer Relations",
    icon: mobile,
  },
];

const ServiceCard = ({ title, icon }) => (
  <Tilt
    className="xs:w-[250px] w-full transition-all"
    options={{ max: 45, scale: 1, speed: 450 }}
  >
    <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
      <img
        src={icon}
        alt={title}
        className="w-16 h-16 object-contain"
      />
      <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
    </div>
  </Tilt>
);

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-10 justify-center">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </>
  );
};

export default About;
