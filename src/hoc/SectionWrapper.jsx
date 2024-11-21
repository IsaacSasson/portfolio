import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    // Conditionally apply padding and max-width for non-portfolio sections
    const isPortfolio = idName === "portfolio";

    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${
          isPortfolio ? "px-0 py-0" : "px-0 2xl:px-60 py-10 2xl:py-16"
        } max-w-full mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;