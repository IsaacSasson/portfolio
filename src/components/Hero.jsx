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
      <div className="parallax__content absolute top-[10%] sm:top-[16%] lg:top-[24%] w-full mx-auto px-4 sm:px-8 lg:pl-[38vh] lg:pr-[30vh] xl:pl-96 xl:pr-72 2xl:px-40 3xl:px-60 flex flex-col lg:flex-row items-start z-10">
        <div className="flex-1 lg:mb-0">
            <h1 className="font-medium text-white text-[36px] xs:text-[44px] sm:text-[58px] md:text-[72px] lg:text-[100px] 2xl:text-[180px] leading-[110%] xs:leading-[120%] sm:leading-[110%] 2xl:leading-[160px]">
            Isaac Sasson
            </h1>
            <Position />
        </div>
        <div className="flex-1 flex flex-wrap justify-start lg:justify-end mt-4 sm:mt-10 xs:ml-0 sm:ml-[-12vh] md:ml-[-20vh] lg:ml-0">
            <div className="font-bold text-[18px] xs:text-[22px] sm:text-[28px] md:text-[34px] lg:text-[36px] 2xl:text-[46px] leading-[28px] xs:leading-[32px] sm:leading-[40px] md:leading-[50px] 2xl:leading-[60px] max-w-full sm:max-w-sm md:max-w-md 2xl:max-w-lg text-white text-left">
            <p>I love crafting captivating experiences for the digital world
            to savor.</p>
            </div>
        </div>
      </div>

      {/* Parallax Images */}
      <img className="parallax__layer parallax__layer1" src="/parallax/4th.svg" alt="Layer One" />
      <img className="parallax__layer parallax__layer2" src="/parallax/3rd.svg" alt="Layer Two" />
      <img className="parallax__layer parallax__layer3" src="/parallax/2nd.svg" alt="Layer Three" />
      <img className="parallax__layer parallax__layer4" src="/parallax/1st.svg" alt="Layer Four" />

      {/* Chibi Canvas */}
      {/* <ChibiCanvas scrollContainer={scrollContainer} /> */}
    </section>
  );
};

export default Hero;
