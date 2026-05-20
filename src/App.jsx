import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import {
    About,
    Contact,
    Hero,
    Navbar,
    Tech,
    Works,
    StarsCanvas,
    Feedbacks,
} from "./components";
import Footer from "./components/Footer/Footer";
import { BsArrowUp } from "react-icons/bs";
import { Experience, Playground, Project, ProjectPage } from "./pages";
import StatisticPage from "./components/MainPage/Statisticspage";

const App = () => {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div className="relative z-0 bg-primary">
                                <div className="bg-cover bg-no-repeat bg-center">
                                    <Navbar />
                                    <div className="relative z-0">
                                        <Hero />
                                        <StarsCanvas />
                                    </div>
                                </div>
                                <Tech />
                                <About />
                                <Works />
                                <Feedbacks />
                                <div className="relative z-0">
                                    <Contact />
                                    <StarsCanvas />
                                </div>
                                <Footer />
                            </div>
                        }
                    />
                    <Route
                        path="/project"
                        element={<ProjectPage />}
                    />
                    <Route path="/play" element={<Playground />} />
                    <Route
                        path="/statistics"
                        element={
                            <div className="bg-primary min-h-screen">
                                <Navbar />
                                <div className="relative z-0 sm:px-16 px-6 max-w-7xl mx-auto">
                                    <StatisticPage />
                                </div>
                                <Footer />
                            </div>
                        }
                    />
                    <Route
                        path="/experience"
                        element={
                            <div className="bg-primary">
                                <Experience />
                            </div>
                        }
                    />
                </Routes>
            </BrowserRouter>
            {showBackToTop && (
                <button
                    className="fixed bottom-4 right-4 p-2 cursor-pointer backToTop"
                    onClick={handleBackToTop}
                >
                    <BsArrowUp />
                </button>
            )}
        </div>
    );
};

export default App;