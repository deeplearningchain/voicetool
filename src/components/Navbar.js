import React from 'react'
import Image from "next/image";


const Navbar = () => {
  return (
    <section className="flex justify-between px-14 pt-6">
      <article>
        <Image src="/assets/logo.svg" alt="Logo" width={80} height={80} />
      </article>
      <article>
        <button className='uppercase bg-white px-6 py-3 rounded-full text-purple'>Connect Wallet</button>
      </article>
    </section>
  );
}

export default Navbar