import Image from "next/image";
import React from 'react';

const About = () => {
  return (
    <div id="about">
      <div style={{ backgroundColor: 'black' }}> 
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            
            {/* Image Section */}
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <Image
                className="object-cover object-center rounded"
                alt="My Degree"  
                src="/degree.png"  
                width={500}        
                height={500}      
                style={{
                  border: '10px solid maroon',  
                  borderRadius: '8px',          
                }}
              />
            </div>

            {/* About Me Text Section */}
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1
                className="title-font text-3xl mb-4 font-bold"
                style={{ color: '#FF8C00' }}  
              >
                About Me
              </h1>
              <p className="mb-8 leading-relaxed text-white"> {/* White text for better readability on black background */}
                I have done my M.Sc from Federal Urdu University, and I have also completed my M.B.A from a well-reputed university.<br /><br />
                I am constantly expanding my knowledge and skill set, eager to stay up-to-date with the latest technologies and trends in the industry.<br /><br />
                Whether I’m developing responsive websites or diving into innovative AI solutions, I strive to create meaningful and impactful digital experiences.<br /><br />
                Currently, I’m looking for opportunities in a reputable software house where I can further hone my skills and contribute to exciting projects.<br /><br />
                Feel free to explore my work and get in touch!
              </p>
            </div> 
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
