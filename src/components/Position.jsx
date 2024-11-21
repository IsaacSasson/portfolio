import React from 'react';

const produceSpans = (text, animation) => {
  return text.split("").map((letter, index) => (
    <span
      key={index}
      className={`inline-block transform-style-3d origin-bottom ${animation}`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {letter === " " ? "\u00A0" : letter}
    </span>
  ));
};

const Position = () => {
  return (
    <div className="relative cursor-default font-medium text-white text-[14px] xs:text-[18px] sm:text-[24px] md:text-[30px] lg:text-[36px] 2xl:text-[66px] leading-[20px] xs:leading-[24px] sm:leading-[30px] md:leading-[36px] lg:leading-[40px] w-full flex justify-center items-center">
      <div className="absolute inset-0 top-0 sm:top-[10px] lg:top-0 flex flex-col">
        <div
          className="text first absolute left-2 xs:left-4 flex mt-4"
          aria-label="ML Engineer"
        >
          {produceSpans("ML Engineer", "animate-textRotate1")}
        </div>
        <div
          className="text second absolute left-2 xs:left-4 flex mt-4"
          aria-label="Full-stack Developer"
        >
          {produceSpans("Full-stack Developer", "animate-textRotate2")}
        </div>
      </div>
    </div>
  );
};

export default Position;
