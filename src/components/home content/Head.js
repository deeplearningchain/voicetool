import React from "react";
import Image from "next/image";
import Rive, { Layout, Fit, Alignment } from "@rive-app/react-canvas";

const Head = (props) => {
  return (
    <section className="flex flex-col justify-center items-center w-[35rem] h-[35rem] -ml-[8rem]">
      <Rive
        src="https://public.rive.app/hosted/139027/48502/AuI6f-jOz0W79pXLTvl1fw.riv"
        stateMachines="State Machine 1"
        layout={new Layout({ fit: Fit.Contain, alignment: Alignment.Center })}
        artboard="DLC Responsive Animation"
        autoplay={true && props.play}
      />
      <button className="absolute lg:bottom-[16%] bottom-[-25%]">
        <Image src="/assets/mic.png" alt="Microphone" width={50} height={50} />
      </button>
    </section>
  );
};

export default Head;
