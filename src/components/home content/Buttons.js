import React from "react";
import Image from "next/image";

const Buttons = () => {
  return (
    <section>
      {/* <article className="flex flex-col gap-[2.5rem]">
        <button className="bg-p-btn text-white bg-no-repeat bg-cover bg-center w-[20rem] h-[7rem]">
          <span className="flex gap-2 ml-12">
            <Image
              src="/assets/arrows.png"
              alt="Arrows"
              width={25}
              height={25}
            />
            <span>Transfer funds</span>
          </span>
        </button>
        <button className="bg-p-btn text-white bg-no-repeat bg-cover bg-center w-[20rem] h-[7rem]">
          <span className="flex gap-2 ml-12">
            <Image
              src="/assets/arrows.png"
              alt="Arrows"
              width={25}
              height={25}
            />
            <span>Transfer funds</span>
          </span>
        </button>
        <button className="bg-p-btn text-white bg-no-repeat bg-cover bg-center w-[20rem] h-[7rem]">
          <span className="flex gap-2 ml-12">
            <Image
              src="/assets/arrows.png"
              alt="Arrows"
              width={25}
              height={25}
            />
            <span>Transfer funds</span>
          </span>
        </button>
        <button className="bg-p-btn text-white bg-no-repeat bg-cover bg-center w-[20rem] h-[7rem]">
          <span className="flex gap-2 ml-12">
            <Image
              src="/assets/arrows.png"
              alt="Arrows"
              width={25}
              height={25}
            />
            <span>Transfer funds</span>
          </span>
        </button>
      </article> */}
      <article className="flex flex-col gap-[4.5rem]">
        <button className="three-borders purple">
          <span className="flex items-center border-[1px] border-[#FF76E1] border-opacity-[0.43]">
            <Image
              src="/assets/arrows.png"
              alt="Arrows"
              width={24}
              height={24}
            />
            <span className="text-sm">Transfer funds</span>
          </span>
        </button>
        <button className="three-borders yellow">
          <span className="flex items-center border-[1px] border-[#FFF176] border-opacity-[0.43]">
            <Image
              src="/assets/explorer.png"
              alt="Globe"
              width={24}
              height={24}
            />
            <span className="text-sm">Open explorer</span>
          </span>
        </button>
        <button className="three-borders blue">
          <span className="flex items-center border-[1px] border-[#76F7FF] border-opacity-[0.43]">
            <Image
              src="/assets/faucet.png"
              alt="Faucet"
              width={24}
              height={24}
            />
            <span className="text-sm">Open faucet</span>
          </span>
        </button>
        <button className="three-borders purple">
          <span className="flex items-center border-[1px] border-[#FF76E1] border-opacity-[0.43]">
            <Image
              src="/assets/deploy.png"
              alt="Deploy"
              width={24}
              height={24}
            />
            <span className="text-sm">deploy contract</span>
          </span>
        </button>
      </article>
    </section>
  );
};

export default Buttons;
