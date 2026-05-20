import React from "react";

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { textVariant } from "../../utils/motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AnimatedTestimonials } from "../ui/animated-testimonals";
import gitmap from "../../assets/gitmap.png";
import diwali from "../../assets/my-images/diwali.jpg";
import launch from "../../assets/my-images/launch.jpg";
import mic from "../../assets/my-images/mic.jpg";
import prize from "../../assets/my-images/prize.jpg";
import { holophin } from "../../assets";

const StatisticPage = () => {

  const testimonials = [
    {
      quote: "The CEO Agent System is one of the most architecturally sophisticated multi-agent AI projects I've seen — 16 agents, real autonomy, real output.",
      name: "OpenClaw Echo",
      designation: "AI Agent Operator",
      src: diwali,
    },
    {
      quote: "Shipped on Filecoin Virtual Machine at ETHGlobal Space Warp. Proof that Edward can execute under hackathon pressure.",
      name: "ETHGlobal",
      designation: "Space Warp Hackathon",
      src: launch,
    },
    {
      quote: "QueenCity Soundboard — real-time audio streaming with Next.js and Supabase. Clean architecture, live product.",
      name: "Community Feedback",
      designation: "Web3 + Streaming",
      src: mic,
    },
    {
      quote: "Full smart contract security coursework via Cyfrin Updraft — auditing, reentrancy patterns, Foundry mastery.",
      name: "Cyfrin / Updraft",
      designation: "Blockchain Security",
      src: prize,
    },
  ];

  return (
    <>
      <div className="flex justify-between  mt-12 md:mt-2">
        <motion.div variants={textVariant()}>
          <div>
            {/* <p className={`${styles.sectionSubText} mt-10`}>My work</p> */}
            <h2 className={`${styles.sectionHeadText} flux`}>Github Stats</h2>
          </div>
        </motion.div>

        <div
          className="flex justify-between "
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

        {/* <div variants={textVariant()}> */}
      </div>
      {/* <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-1 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div> */}

      <div className="mt-10 flex items-center justify-center flex-wrap gap-20">
        <Tilt transition-all>
          <a href="https://github.com/0xwaya" target="_blank" rel="noreferrer">
            <img
              className=""
              src="https://github-readme-stats.vercel.app/api/pin/?username=0xwaya&repo=ceo-agent-system&theme=tokyonight"
              width="400"
              alt="0xwaya's CEO Agent System"
            />
          </a>

          <img src="https://komarev.com/ghpvc/?username=0xwaya" alt="Profile Views" />

        </Tilt>

        <div className="github-stats">
          <img
            width="100%"
            src="https://github-readme-stats.vercel.app/api?username=0xwaya&show_icons=true&theme=tokyonight"
          />
          <img
            width="100%"
            src="https://github-readme-streak-stats.herokuapp.com/?user=0xwaya&theme=tokyonight"
          />

          <img src={gitmap} width={500} alt="" />

          <a
            href="https://github.com/0xwaya"
            target="_blank"
            rel="noreferrer"
            className=" flex justify-start items-center gap-12 mt-5"
          >
            <img
              height="36"
              className="border-0px h-[36px] "
              src="https://cdn.ko-fi.com/cdn/kofi4.png?v=2"
              alt="Buy Me a Coffee at ko-fi.com"
            />

            <span className="github-star-btn">
              ⭐⭐Give my Repo some stars⭐⭐
            </span>
          </a>
        </div>

        <img className="mt-1" src={holophin} alt="holphin" />





        <AnimatedTestimonials testimonials={testimonials} />

      </div>
    </>
  );
};

export default SectionWrapper(StatisticPage, "");
