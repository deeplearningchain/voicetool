import React from 'react'
import Buttons from './home content/Buttons';
import ChatBot from './home content/ChatBot';
import Head from './home content/Head';

const HomeContent = () => {
  return (
    <section className="xl:px-14 md:px-8 px-4 flex flex-col xl:flex-row justify-between items-end 2xl:h-[82%] xl:h-[90%] p-[7%] lg:pb-10">
      <article className="w-full xl:w-[unset]">
        <ChatBot />
      </article>
      <article className="flex justify-center items-center w-full xl:w-[unset] overflow-x-hidden xl:overflow-x-[unset]">
        <Head />
      </article>
      <article className="w-full xl:w-[unset] flex justify-center">
        <Buttons />
      </article>
    </section>
  );
}

export default HomeContent