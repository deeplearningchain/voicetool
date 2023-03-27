import React from "react";
import Image from "next/image";
import Rive, { Layout, Fit, Alignment } from "@rive-app/react-canvas";

const Head = () => {
  return (
    <section className="flex flex-col gap-10 justify-center items-center">
      <Rive
        src="https://public.rive.app/hosted/139027/44696/ftYE65ulwES-TFJIw9AhIw.riv"
        layout={new Layout({ fit: Fit.Contain, alignment: Alignment.Center })}
        width={400}
        height={400}
      />
      <button>
        <Image src="/assets/mic.png" alt="Microphone" width={50} height={50} />
      </button>
    </section>
  );
};

export default Head;
