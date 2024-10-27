import React from "react";
import Image from "next/image";

const images = [
  '/resume.png',
  '/heck.png',
  '/quiz.png',
  '/stud.png',
  '/todo.png',
  '/num.png',
  '/cli.png',
  '/atm.png',
  '/curr.png',
  '/ad.png',
];

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="min-h-screen bg-black p-4 md:p-8">
        <h1
          className="text-3xl font-bold text-center mb-8"
          style={{ color: '#FF8C00', marginTop: '40px' }}  // Dark orange color
        >
          MY PROJECTS
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {images.map((src, index) => (
            <div
              key={index}
              className="flex justify-center items-center border-4 md:border-8 p-2 md:p-4"
              style={{ borderColor: '#800000' }} // Custom maroon color
            >
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                width={300}  // Width of images
                height={300} // Height of images
                className="object-contain"
              />
            </div>
          ))}
        </div>
        <br /> {/* Correct usage of <br> */}
        <br /> {/* Correct usage of <br> */}
      </div>
    </div>
  );
}

export default Portfolio;
