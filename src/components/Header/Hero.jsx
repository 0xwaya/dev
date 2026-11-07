import { useRef } from "react";
import { useTypewriter } from "react-simple-typewriter";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { styles } from "../../styles";

import { BsTwitter, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { HiOutlineGlobeAlt } from "react-icons/hi";

import PropTypes from 'prop-types';

const ServiceCard = ({ index }) => (
  <Tilt className="xs:w-[250px] w-full " options={{ max: 45, scale: 1, speed: 450 }}>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className=""
    >
      <div
        className="w-full "
      >
        <div className="waya hover:hoverwayabg relative overflow-hidden flex items-center justify-center lg:w-96 lg:h-96 w-[12.5rem] h-[12.5rem] max-[350px]:w-[10.5rem] max-[350px]:h-[10.5rem] mx-auto bg-gradient-to-b from-blue-800 via-purple-700 to-red-700 hero-animation will-change-transform shadow-card">
          <div className="bg-avatar wayabg hover:bg-avatar1 bg-cover bg-no-repeat bg-[50%] justify-self-center lg:w-[374px] lg:h-[374px] w-48 h-48 max-[350px]:w-40 max-[350px]:h-40 hero-animation will-change-transform" />
          <img
            src="/eamr.png"
            alt="Profile overlay"
            className="absolute z-20 rounded-full object-cover lg:w-[360px] lg:h-[360px] w-[11.25rem] h-[11.25rem] max-[350px]:w-[9.5rem] max-[350px]:h-[9.5rem] pointer-events-none"
          />
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const Hero = () => {
  const ref = useRef(null);

  const [text] = useTypewriter({
    words: [
      "Founder — R&D at WayaLabs",
      "AI solutions studio",
      "Full-stack platforms",
      "LangGraph research",
      "Also known as 0xwaya",
    ],
    loop: true,
    delaySpeed: 1000,
  });

  return (
    <section className="mx-auto w-full">
      <div
        className={`${styles.paddingX} mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl flex-col-reverse items-center gap-10 pb-16 pt-6 lg:flex-row lg:items-center lg:justify-between lg:gap-16`}
      >
        <div>
          <div className="flex gap-3 ">
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#2bc244]"></div>
              <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
            </div>

            <div className="lg:w-[32rem]">
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I&apos;m <br />
                <span className=" animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
                  Edward Mercado
                </span>
              </h1>

              <p className="mt-3 text-sm uppercase tracking-[0.18em] text-secondary">
                Cincinnati · WayaLabs
              </p>
              <p
                className={`${styles.heroSubText} mt-3 min-h-[4.5rem] max-w-lg text-white-100 sm:min-h-[3.25rem]`}
              >
                {text}
              </p>
            </div>
          </div>

          <div className="flex">
            <a
              href="#tech"
              className="mx-auto mt-6 flex w-fit cursor-pointer select-none items-center justify-center gap-6 rounded-xl bg-tertiary px-4 py-2 lg:mt-8 lg:px-7 lg:py-3"
            >
              <div className=" group border-[3px] border-white rounded-full md:h-12 h-10 w-7 flex justify-center lg:scale-100 scale-75">
                <div className="bg-white h-3 w-1 rounded-full mt-[10px] animate-bounce lg:scale-100 scale-75"></div>
              </div>

              <p className=" ">
                {/* <span className="faulty-letter">Down</span><span className=" glowing-txt">Scroll</span>
              
               */}
                Scroll Down
              </p>
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-[28px] md:justify-start md:text-[32px]">
            <a href="https://www.linkedin.com/in/0xwaya/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <BsLinkedin className="transition-transform duration-150 hover:-translate-y-0.5" />
            </a>
            <a href="https://github.com/0xwaya" target="_blank" rel="noreferrer" aria-label="GitHub">
              <BsGithub className="transition-transform duration-150 hover:-translate-y-0.5" />
            </a>
            <a href="https://x.com/0xwaya" target="_blank" rel="noreferrer" aria-label="X">
              <BsTwitter className="transition-transform duration-150 hover:-translate-y-0.5" />
            </a>
            <a href="https://wayalabs.com" target="_blank" rel="noreferrer" aria-label="WayaLabs">
              <HiOutlineGlobeAlt className="transition-transform duration-150 hover:-translate-y-0.5" />
            </a>
            <a href="https://www.instagram.com/0xwaya/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <BsInstagram className="transition-transform duration-150 hover:-translate-y-0.5" />
            </a>
          </div>


        </div>

        <div ref={ref} className="w-full max-w-md">
          <ServiceCard index={0} reference={ref} />
        </div>
      </div>
    </section>
  );

};

ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string,
  icon: PropTypes.string,
  reference: PropTypes.object,
};

export default Hero;
