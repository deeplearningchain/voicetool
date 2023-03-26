import React from 'react'
import Buttons from './home content/Buttons';
import ChatBot from './home content/ChatBot';
import Head from './home content/Head';

const HomeContent = () => {
  return (
    <section className='px-14 flex justify-between items-center h-[91%]'>
      <article>
        <ChatBot/>
      </article>
      <article className='-mr-[6rem]'>
        <Head/>
      </article>
      <article>
        <Buttons/>
      </article>
    </section>
  );
}

export default HomeContent