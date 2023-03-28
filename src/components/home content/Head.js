import React from "react";
import Image from "next/image";
import Rive, { Layout, Fit, Alignment } from "@rive-app/react-canvas";

const Head = () => {
  return (
    <section className="flex flex-col justify-center items-center w-[40rem] h-[40rem]">
      <Rive
        src="https://public.rive.app/hosted/139027/44696/ftYE65ulwES-TFJIw9AhIw.riv"
        layout={new Layout({ fit: Fit.Contain, alignment: Alignment.Center })}
        stateMachines="State Machine 1"
        // artboard="DLC Responsive Animation"
        // autoplay={true && props.play}
      />
      <button>
        <Image src="/assets/mic.png" alt="Microphone" width={50} height={50} />
      </button>
    </section>
  );
};

export default Head;
