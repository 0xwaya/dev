import { useState } from "react";
import PropTypes from 'prop-types';
import {
  Container,
  Wrapper,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectStyle";
import ProjectCard from "../Cards/ProjectCards.jsx";
import { projects1 } from "../constants/index.js";
import { styles } from "../styles";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");

  const createToggleButton = (value, label) => (
    <ToggleButton
      active={toggle === value}
      value={value}
      onClick={() => setToggle(value)}
    >
      {label}
    </ToggleButton>
  );

  const filteredProjects = toggle === "all"
    ? projects1
    : projects1.filter((item) => item.category === toggle);

  return (
    <Container id="projects" className="pt-20">
      <Wrapper className="bg-[#050816]">
        <h2
          className={`${styles.sectionHeadText} bg-[#050816] text-center md:mt-2 sm:mt-10 mb-[-20px] flux`}
        >
          Projects
        </h2>
        <Desc className={`${styles.sectionSubText} text-center`}>
          Explore my diverse portfolio of projects, ranging from web3 Dapps to full stack applications,
          showcasing my expertise in various technologies.
        </Desc>
        <ToggleButtonGroup>
          {createToggleButton("all", "All")}
          <Divider />
          {createToggleButton("full stack", "Full Stack")}
          <Divider />
          {createToggleButton("react", "React")}
          <Divider />
          {createToggleButton("javascript", "JavaScript")}
          <Divider />
          {createToggleButton("html", "HTML&CSS")}
        </ToggleButtonGroup>
        <CardContainer>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

Projects.propTypes = {
  openModal: PropTypes.func.isRequired,
  setOpenModal: PropTypes.func.isRequired,
};

export default Projects;