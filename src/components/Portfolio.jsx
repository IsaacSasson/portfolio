import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Spline from '@splinetool/react-spline';

import { portfolio } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, image, spline }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('show');
    }
  }, [controls, inView]);

  if (index === 0 && spline) {
    return (
      <div className="relative w-full h-auto md:h-screen flex flex-col md:flex-row items-centeroverflow-visible">
        {/* Spline Viewer */}
        <div
          className="relative w-full md:w-7/12 h-[300px] md:h-full"
          style={{
            transform: "translateZ(0)", // Ensure GPU rendering for smoother visuals
          }}
        >
          <Spline
            scene={spline}
            className="w-full h-full"
            style={{
              transform: "scale(1)", // Default scaling
            }}
          />
        </div>
        {/* Text Content */}
        <div className="relative w-full md:w-5/12 h-full flex flex-col justify-center z-20 px-6 sm:px-8 md:px-20 py-6 md:py-0">
          <motion.div
            ref={ref} // Attach the ref here
            animate={controls}
            initial="hidden"
            variants={fadeIn("up", "spring", 0, 0.75)}
            className="rounded-lg p-4 sm:p-6 max-w-lg"
          >
            <h3 className="text-coinpulsePrimary font-bold text-md sm:text-lg md:text-2xl lg:text-5xl">
              {name}
            </h3>
            <p className="mt-4 text-coinpulseSecondary text-sm sm:text-md lg:text-2xl">
              {description}
            </p>
            {/* "View Website" Link */}
            <a
              href="https://isaacsasson.com/CoinPulse"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-coinpulseSecondary hover:text-coinpulseHighlight text-sm sm:text-md lg:text-lg underline"
            >
              View Website
            </a>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn("up", "spring", 0, 0.75)}
      className={`w-full mt-6 sm:mt-10 flex flex-col ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      } gap-5 z-10 relative`}
    >
      <div className="relative w-full md:w-1/2 h-[250px] sm:h-64">
        {spline ? (
          <Spline scene={spline} className="w-full h-full" />
        ) : (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-lg"
          />
        )}
      </div>
      <div className="relative w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-8 md:px-20 lg:px-40">
        <h3 className="text-white font-bold text-md sm:text-lg md:text-2xl lg:text-3xl">
          {name}
        </h3>
        <p className="mt-4 text-secondary text-sm sm:text-md lg:text-lg">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <div className="relative h-auto overflow-hidden bg-gradient-to-tl from-primary via-primary to-primary pb-24">
      <motion.div
        className="relative z-10 w-full px-6 sm:px-8 md:px-20 lg:px-40 pt-24"
        variants={textVariant()}
      >
        <div
          className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#89a0fc] to-[#89a0fc67] opacity-0.1 sm:left-[calc(50%-30rem)] sm:w-[160.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <h2 className={`${styles.sectionText} text-center text-quaternary`}>
          Portfolio
        </h2>
        <div className="mt-6 sm:mt-10 flex flex-col gap-12 sm:gap-20">
          {portfolio.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Portfolio, "portfolio");
