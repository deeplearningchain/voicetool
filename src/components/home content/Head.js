import React from "react";
import Image from "next/image";
import Rive, { Layout, Fit, Alignment } from "@rive-app/react-canvas";

const Head = (props) => {
  return (
    <section className="flex flex-col justify-center items-center w-[60rem] h-[40rem] relative">
      <Rive
        src="https://public.rive.app/hosted/139027/47193/5wpyMWAKCkK6JvkNVqhvuQ.riv"
        stateMachines="State Machine 1"
        layout={new Layout({ fit: Fit.Contain, alignment: Alignment.Center })}
        artboard="DLC Responsive Animation"
        autoplay={true && props.play}
      />
      <button className="absolute bottom-[15%]">
        <Image src="/assets/mic.png" alt="Microphone" width={50} height={50} />
      </button>
    </section>
  );
};

export default Head;
