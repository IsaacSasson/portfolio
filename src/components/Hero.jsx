import ChibiCanvas from "./Chibi"; // Import your Chibi component
import Position from "./Position";
import { useEffect, useRef } from "react";

const Hero = ({ scrollContainer }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = heroRef.current;
      const layers = document.querySelectorAll(".parallax__layer");
      const scrollTop = window.scrollY;
      const heroOffsetTop = heroSection.offsetTop;
      const heroHeight = heroSection.offsetHeight;

      // Check if scrolling within the Hero section
      if (scrollTop >= heroOffsetTop && scrollTop <= heroOffsetTop + heroHeight) {
        const scrollPosition = scrollTop - heroOffsetTop;

        layers.forEach((layer, index) => {
          const speed = (index + 1) * 0.2; // Adjust speed for each layer
          layer.style.transform = `translateY(${scrollPosition * speed}px)`;
        });
      } else {
        // Reset layers when outside Hero section
        layers.forEach((layer) => {
          layer.style.transform = "translateY(0px)";
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={heroRef} className="parallax relative h-screen w-full">
      <div className="parallax__content absolute top-[10%] sm:top-[16%] lg:top-[24%] w-full mx-auto lg:pl-[38vh] lg:pr-[30vh] xl:pl-96 xl:pr-72 2xl:px-40 3xl:px-60 flex flex-col lg:flex-row items-start z-10">
        <div className="flex-1 lg:mb-0">
          <h1 className="font-medium text-white text-[40px] xs:text-[50px] sm:text-[68px] md:text-[80px] lg:text-[100px] 2xl:text-[180px] leading-[110px] 2xl:leading-[160px]">
            Isaac Sasson
          </h1>
          <Position />
        </div>
        <div className="flex-1 flex justify-start lg:justify-end mt-4 sm:mt-14 ml-8 xs:ml-[-4vh] sm:ml-[-17vh] md:ml-[-26vh] lg:mt-10 2xl:mt-0">
          <div className="font-bold text-[20px] sm:text-[30px] md:text-[36px] 2xl:text-[46px] sm:leading-[40px] md:leading-[50px] 2xl:leading-[60px] streaky-glow max-w-sm 2xl:max-w-lg text-white text-left">
            I love crafting <br /> captivating experiences for the digital world
            to savor.
          </div>
        </div>
      </div>

      {/* Parallax Images */}
      <img className="parallax__layer parallax__layer1" src="/parallax/1First-transformed.png" alt="Layer One" />
      <img className="parallax__layer parallax__layer2" src="/parallax/2Second-transformed.png" alt="Layer Two" />
      <img className="parallax__layer parallax__layer3" src="/parallax/3Three-transformed.png" alt="Layer Three" />
      <img className="parallax__layer parallax__layer4" src="/parallax/4Four-transformed.png" alt="Layer Four" />
      <img className="parallax__layer parallax__layer5" src="/parallax/5Five-transformed.png" alt="Layer Five" />

      {/* Chibi Canvas */}
      {/* <ChibiCanvas scrollContainer={scrollContainer} /> */}
    </section>
  );
};

export default Hero;
