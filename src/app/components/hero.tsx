"use client"; // Ensures this file is treated as a client-side component

import React from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div>
      <section className="bg-black text-white body-font">
        {/* Set background to black and text to white */}
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-orange-500">
              I AM
              <br />
              <Typewriter
                options={{
                  strings: ['Web Developer', 'UI/UX Designer', 'Graphic Designer', 'Data Analyst'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="leading-relaxed" style={{ marginBottom: '0' }}>
              I am a full stack web developer with a passion for building dynamic, 
              user-friendly websites and applications. With expertise in both front-end 
              and back-end technologies, I enjoy creating seamless digital experiences 
              that are both visually appealing and highly functional. My skills include 
              HTML, CSS, JavaScript, TypeScript, React, Next.js, and various back-end 
              frameworks. I am always eager to learn new technologies.
            </p>
            <div className="flex w-full md:justify-start justify-center items-end mt-4">
              <a href="#Contact"> {/* Use <a> instead of <link> */}
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Contact
                </button>
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded mx-auto"
              alt="hero"
              src="/full.png" // Adjust this to your image path
              height={400}
              width={400} // Ensures no gap above the image
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
