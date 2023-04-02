import React from 'react'
import Image from "next/image";

const ChatBot = () => {
  return (
    <section className="text-white flex items-end gap-3">
      <Image src="/assets/dlc.svg" width={60} height={60} className="mb-10" />
      <div className="chat-interface flex flex-col justify-between pl-[6%] pb-[8%]">
        {/* all the chat content goes here */}
        <article className="flex flex-col items-center gap-3 mt-8 overflow-y-scroll mb-[2rem]">
          <div className="rounded-[4.73px] border-[0.7px] border-[rgba(255,118,225,0.3)] bg-[rgba(113,58,191,0.3)] focus:outline-none w-[70%] h-fit p-[10px]">
            Hi, I'm dlc, your voice tool!
          </div>
          {/* this is another message box */}
          {/* <div className="rounded-[4.73px] border-[0.7px] border-[rgba(255,118,225,0.3)] bg-[rgba(113,58,191,0.3)] focus:outline-none w-[70%] h-fit p-[10px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim
          </div> */}
        </article>

        {/* input field starts here */}
        <article className="flex h-[29px] gap-2 justify-center">
          <input className="rounded-[4.73px] border-[0.7px] border-[rgba(255,118,225,0.3)] bg-[rgba(72,21,146,0.3)] focus:outline-none p-1 w-[70%]" />
          <button className="bg-[rgba(255,118,225,0.3)] rounded-[4.73px] p-2 flex items-center">
            <Image
              src="/assets/submit.svg"
              alt="Submit Button"
              width={15}
              height={15}
            />
          </button>
        </article>
        {/* input field ends here */}
      </div>
    </section>
  );
}

export default ChatBot