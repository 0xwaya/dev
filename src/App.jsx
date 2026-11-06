import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, Suspense, lazy } from "react";
import Hero from "./components/Header/Hero";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import { BsArrowUp } from "react-icons/bs";

const About = lazy(() => import("./components/MainPage/About"));
const Contact = lazy(() => import("./components/MainPage/Contact"));
const Tech = lazy(() => import("./components/MainPage/Tech"));
const Works = lazy(() => import("./components/MainPage/Works"));
const Feedbacks = lazy(() =>
    import("./components/MainPage/Feedbacks").then((mod) => ({
        default: mod.WrappedFeedbacks,
    }))
);
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));
const Experience = lazy(() => import("./pages/Experience"));
const Playground = lazy(() => import("./pages/Playground"));
const ProjectPage = lazy(() => import("./pages/ProjectPage"));
const StatisticPage = lazy(() => import("./components/MainPage/Statisticspage"));

const SectionFallback = () => <div className="h-16" />;

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
                <Suspense fallback={<SectionFallback />}>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <div className="relative z-0 bg-primary">
                                    <div className="bg-cover bg-no-repeat bg-center">
                                        <Navbar />
                                        <div className="relative z-0 pt-24">
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
                                    </div>
                                    <Footer />
                                </div>
                            }
                        />
                        <Route
                            path="/project"
                            element={<ProjectPage />}
                        />
                        <Route
                            path="/play"
                            element={
                                <div className="bg-primary min-h-screen">
                                    <Navbar />
                                    <div className="pt-20 sm:pt-24">
                                        <Playground />
                                    </div>
                                    <Footer />
                                </div>
                            }
                        />
                        <Route
                            path="/playground"
                            element={
                                <div className="bg-primary min-h-screen">
                                    <Navbar />
                                    <div className="pt-20 sm:pt-24">
                                        <Playground />
                                    </div>
                                    <Footer />
                                </div>
                            }
                        />
                        <Route
                            path="/statistics"
                            element={
                                <div className="bg-primary min-h-screen">
                                    <Navbar />
                                    <div className="relative z-0 mx-auto max-w-7xl px-4 pt-28 sm:px-16 sm:pt-24">
                                        <StatisticPage />
                                    </div>
                                    <Footer />
                                </div>
                            }
                        />
                        <Route
                            path="*"
                            element={
                                <div className="bg-primary min-h-screen">
                                    <Navbar />
                                    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
                                        <p className="text-sm uppercase tracking-[0.2em] text-secondary">404</p>
                                        <h1 className="mt-3 text-4xl font-black text-white">Page not found</h1>
                                        <p className="mt-4 max-w-md text-secondary">
                                            That address is not part of this site.
                                        </p>
                                        <a href="/" className="mt-6 rounded-xl bg-tertiary px-5 py-2 font-semibold text-white">
                                            Back home
                                        </a>
                                    </div>
                                    <Footer />
                                </div>
                            }
                        />
                        <Route
                            path="/experience"
                            element={
                                <div className="bg-primary min-h-screen">
                                    <Navbar />
                                    <div className="pt-24">
                                        <Experience />
                                    </div>
                                    <Footer />
                                </div>
                            }
                        />
                    </Routes>
                </Suspense>
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