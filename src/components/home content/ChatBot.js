import React, { useState } from "react";
import Image from "next/image";

const ChatBot = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      // check if input value is not empty or just whitespace
      setMessages([...messages, inputValue]);
      setInputValue("");
    }
  };

  return (
    <section className="text-white flex items-end gap-3 justify-center lg:justify-[unset] mt-10 md:mt-0">
      <Image
        src="/assets/dlc.svg"
        width={60}
        height={60}
        className="md:mb-10"
      />
      <div className="chat-interface flex flex-col justify-between pl-[6%] md:pl-[4%] pb-[8%] md:pb-[6%] lg:pb-[4%] lg:pl-[3%] xl:pl-[6%] xl:pb-[8%]">
        {/* all the chat content goes here */}
        <article className="flex flex-col items-center gap-3 mt-8 overflow-y-scroll mb-[2rem]">
          <div className="rounded-[4.73px] border-[0.7px] border-[rgba(255,118,225,0.3)] bg-[rgba(113,58,191,0.3)] focus:outline-none w-[80%] h-fit p-[10px]">
            Hi, I'm dlc, your voice tool!
          </div>
          {/* user message boxes */}
          {messages.map((message, index) => (
            <div
              key={index}
              className="rounded-[4.73px] border-[0.7px] border-[rgba(255,118,225,0.3)] bg-[rgba(113,58,191,0.3)] focus:outline-none w-[80%] h-fit p-[10px]"
            >
              {message}
            </div>
          ))}
        </article>

        {/* input field starts here */}
        <article className="flex h-[29px] gap-2 justify-center">
          <input
            className="rounded-[4.73px] border-[0.7px] border-[rgba(255,118,225,0.3)] bg-[rgba(72,21,146,0.3)] focus:outline-none p-1 md:w-[70%] w-[60%]"
            onChange={handleInputChange}
            value={inputValue}
            type="text"
          />
          <button className="bg-[rgba(255,118,225,0.3)] rounded-[4.73px] p-2 flex items-center">
            <Image
              src="/assets/submit.svg"
              alt="Submit Button"
              width={15}
              height={15}
              onClick={handleButtonClick}
              type="submit"
            />
          </button>
        </article>
        {/* input field ends here */}
      </div>
    </section>
  );
};

export default ChatBot;
