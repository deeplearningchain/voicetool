import React from 'react'
import Image from "next/image";

const Head = () => {
  return (
    <section className="flex flex-col gap-10 justify-center items-center">
      <Image src="/assets/Hypeapes.png" alt="Hypeapes" width={150} height={150} />
      <button>
        <Image src="/assets/mic.png" alt="Microphone" width={50} height={50} />
      </button>
    </section>
  );
}

export default Head