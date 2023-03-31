import React from 'react'
import Image from "next/image";

const ChatBot = () => {
  return (
    <section className="text-white flex">
        <Image src="/assets/dlc.svg" width={60} height={60}/>
      <article className='chat-interface'></article>
    </section>
  );
}

export default ChatBot