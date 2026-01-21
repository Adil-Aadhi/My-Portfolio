import { useState, useEffect, lazy } from "react";
import { AnimatePresence } from "framer-motion";
import { Suspense } from "react";
import ScrollTop from "./components/ScrollUp";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/skills";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";
import IntroScreen from "./components/IntroScreen";
import CustomCursor from "./components/customCursor";
import LeetCodeStats from "./components/LeetcodeStats";
import Timeline from "./components/TimeLine";

const Gallery=lazy(()=>import("./components/Gallery"))

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2500);        // ⏱ show intro for 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showIntro && <IntroScreen />}
      </AnimatePresence>

      {!showIntro && (
        <div className="w-full bg-black">
          <CustomCursor/>
          <Navbar />
          <Hero />
          <About />
          <Timeline/>
          <Suspense fallback={<h2>Loading..Gallery </h2>}>
            <Gallery />
          </Suspense>
          <Skills />
          <Projects />
          <LeetCodeStats/>
          <Contact />
          <ScrollTop/>
        </div>
      )}
    </>
  );
}

export default App;
