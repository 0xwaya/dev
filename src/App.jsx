import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const Playground = lazy(() => import("./pages/Playground"));

const Shell = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);

const NotFound = () => (
  <div className="container-page flex min-h-[60vh] flex-col items-start justify-center py-32">
    <p className="eyebrow">404</p>
    <h1 className="h2">Page not found</h1>
    <p className="lede">That address is not part of this site.</p>
    <a href="/" className="btn-primary mt-8">
      Back home
    </a>
  </div>
);

const App = () => (
  <MotionConfig reducedMotion="user">
    <BrowserRouter>
      <Shell>
        <Suspense fallback={<div className="h-screen" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/play" element={<Playground />} />
            <Route path="/playground" element={<Navigate to="/play" replace />} />
            <Route path="/project" element={<Navigate to="/#work" replace />} />
            <Route path="/experience" element={<Navigate to="/#experience" replace />} />
            <Route path="/statistics" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Shell>
    </BrowserRouter>
  </MotionConfig>
);

export default App;
