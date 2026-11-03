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
        <Desc className={`${styles.sectionSubText} text-center normal-case`}>
          Live sites, public repositories, and the private Echo note. Filters match the work that is actually listed.
        </Desc>
        <ToggleButtonGroup>
          {createToggleButton("all", "All")}
          <Divider />
          {createToggleButton("ai", "AI")}
          <Divider />
          {createToggleButton("web", "Web")}
          <Divider />
          {createToggleButton("web3", "Web3")}
        </ToggleButtonGroup>
        <CardContainer>
          {filteredProjects.length === 0 ? (
            <p className="text-secondary text-center py-16">No projects in this group.</p>
          ) : (
            filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))
          )}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

Projects.propTypes = {
  openModal: PropTypes.shape({
    state: PropTypes.bool,
    project: PropTypes.object,
  }).isRequired,
  setOpenModal: PropTypes.func.isRequired,
};

export default Projects;