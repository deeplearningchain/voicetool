import React from 'react'
import Buttons from './home content/Buttons';
import ChatBot from './home content/ChatBot';
import Head from './home content/Head';

const HomeContent = () => {
  return (
    <section className='lg:px-14 px-8 flex flex-col lg:flex-row justify-between items-end h-[90%] p-[7%]'>
      <article className='w-full lg:w-[unset]'>
        <ChatBot/>
      </article>
      <article className='flex justify-center items-center w-full lg:w-[unset] overflow-x-hidden lg:overflow-x-[unset]'>
        <Head/>
      </article>
      <article className='w-full lg:w-[unset] flex justify-center'>
        <Buttons/>
      </article>
    </section>
  );
}

export default HomeContent