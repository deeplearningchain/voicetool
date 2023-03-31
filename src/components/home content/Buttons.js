import React from "react";
import Image from "next/image";
import ButtonsData from "../utils/data";

const ButtonData = ({
  fillOne,
  fillTwo,
  fillThree,
  stroke,
  text,
  alt,
  icon,
}) => {
  return (
    <article>
      <button className="text-white relative">
        <svg
          width="269"
          height="94"
          viewBox="0 0 269 94"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.39"
            d="M249.266 76.94H20.489L17.2044 73.6486V19.7508L20.5033 16.4518H249.303L252.602 19.7437V73.5976L249.266 76.94Z"
            fill={fillOne}
            stroke={stroke}
            stroke-width="0.73"
          />
          <path
            opacity="0.39"
            d="M252.284 84.2285H17.4642L9.91588 76.666V16.7333L17.4859 9.16334H252.32L259.89 16.7262V76.6149L252.284 84.2285Z"
            fill={fillTwo}
            stroke={stroke}
            stroke-width="0.728788"
          />
          <path
            opacity="0.3"
            d="M255.942 0.417861L268.636 13.104V80.237L255.913 92.974H13.8349L1.17042 80.2808V13.1112L13.8638 0.417861H255.942Z"
            fill={fillThree}
            stroke={stroke}
            stroke-width="0.728788"
          />
        </svg>
        <span className="flex gap-2 ml-12 absolute top-[36%]">
          <Image src={icon} alt={alt} width={25} height={25} />
          <span>{text}</span>
        </span>
      </button>
    </article>
  );
};
const Buttons = () => {
  return (
    <section className="flex flex-col gap-[1.5rem]">
      {ButtonsData.map((item, index) => (
        <ButtonData
          key={index}
          fillOne={item.fillOne}
          fillTwo={item.fillTwo}
          fillThree={item.fillThree}
          stroke={item.stroke}
          text={item.text}
          alt={item.alt}
          icon={item.icon}
        />
      ))}
    </section>
  );
};

export default Buttons;
