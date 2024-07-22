import React from "react";
import { motion } from "framer-motion";
import { WavyBackground } from "./components/ui/wavy-background.tsx";
import { TracingBeam } from "./components/ui/tracing-beam.tsx";

import styles from "./style";
import {
  Navbar,
  Education,
  SkillsAndExperience,
  ExtraCurricular,
  Footer,
  OpenSource,
  Projects,
  BlogPosts,
  Loading,
  Achievements,
} from "./components";

const Hero = React.lazy(() => import("./components/Hero"));

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1600);
  }, []);

  if (isLoading) {
    return (
      <div className="bg-black w-full h-screen overflow-hidden">
        <WavyBackground
          className="your-class-name" // optional, add any custom classes you need
          containerClassName="your-container-class" // optional, add any custom container classes you need
          colors={["#00B4DB", "#0083B0", "#005F99", "#003F7D", "#002D62"]} // ocean color, which matches with the website theme

          waveWidth={50} // optional, custom wave width
          backgroundFill="black" // optional, custom background fill color
          blur={10} // optional, custom blur amount
          speed="fast" // optional, wave speed, "slow" or "fast"
          waveOpacity={0.5} // optional, custom wave opacity
        >
          <Loading />
        </WavyBackground>
      </div>
    );
  } else {
    return (
      // A div to wrap the entire application
      <div className="bg-primary w-full overflow-hidden">
        <motion.section
          initial={{ x: -5, opacity: 0 }}
          animate={{ x: 10, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <TracingBeam className="relative z-40">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <Navbar />
              </div>
            </div>
            <div className={`bg-primary ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <Hero />
              </div>
            </div>

            <div
              className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}
            >
              <div className={`${styles.boxWidth}`}>
                <SkillsAndExperience />
                <Education />
              </div>
            </div>
            <div className={` ${styles.paddingX} sm:px-12 px-16`}>
              <Achievements/>
            </div>
            <div
              className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}
            >
              <div className={`${styles.boxWidth}`}>
                <Projects />
                <BlogPosts enabled={false} />
                <OpenSource />
              </div>
            </div>
            <Footer />
          </TracingBeam>
        </motion.section>
      </div>
    );
  }
};

export default App;
