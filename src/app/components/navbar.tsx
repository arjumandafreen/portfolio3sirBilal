import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const Navbar = () => {
    return (
        <div className="bg-pink-800 z-50 sticky top-0">
            <header className="bg-pink-800 text-white body-font">
                <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-parrot-green mb-4 md:mb-0">
                        <Image src="/img.png" width={30} height={30} alt="Personality" />
                        <span
                            className="ml-4 text-2xl"
                            style={{
                                fontFamily: 'cursive',
                                fontWeight: 'bold',
                                letterSpacing: '1px',
                            }}
                        >
                            Arjumand Afreen
                        </span> 
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link href={"/"} className="mr-3 hover:text-green-600">Home</Link>
                        <Link href={"#about"} className="mr-3 hover:text-green-600">About</Link>
                        <Link href={"#skills"} className="mr-3 hover:text-green-600">Skills</Link>
                        <Link href={"#portfolio"} className="mr-3 hover:text-green-600">Portfolio</Link>
                        <Link href={"#Contact"} className="mr-3 hover:text-green-600">Contact</Link>
                    </nav>
                    <a href="/kcv.pdf" download>
                        <button className="inline-flex items-center bg-black border-0 py-1 px-2 focus:outline-none hover:bg-green-500 rounded text-sm mt-4 md:mt-0 text-white">
                            Download CV
                        </button>
                    </a>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
