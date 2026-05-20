import { useState } from "react";
import Projects from "./Project";
import ProjectModal from "../Cards/ProjectModal";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";

const ProjectPage = () => {
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <div className="bg-primary min-h-screen">
      <Navbar />
      <Projects openModal={openModal} setOpenModal={setOpenModal} />
      {openModal.state && openModal.project && (
        <ProjectModal openModal={openModal} setOpenModal={setOpenModal} />
      )}
      <Footer />
    </div>
  );
};

export default ProjectPage;
