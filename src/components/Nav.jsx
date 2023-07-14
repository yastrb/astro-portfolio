import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Nav = () => {
    const [toggled, setToggled] = useState(false);

    const handleToggle = () => {
        setToggled(!toggled);
    };

    return (
        <header className=" w-full mx-auto h-20 font-semibold px-6 flex flex-col justify-center lg:items-center lg:flex-row lg:justify-between shadow-md fixed z-10 bg-[#ffffff] ">
            <div className="flex items-center justify-between">

                <a href="https://docs.google.com/document/d/your-document-id/export?format=pdf" download >
                    <button className="bg-main text-[#ffffff] px-4 py-2 rounded-3xl">Download CV</button>
                </a>
                <div className=' flex gap-4'>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
                        <path fill="currentColor" d="M236.37 139.4a12 12 0 0 0-12-3A84.07 84.07 0 0 1 119.6 31.59a12 12 0 0 0-15-15a108.86 108.86 0 0 0-54.91 38.48A108 108 0 0 0 136 228a107.09 107.09 0 0 0 64.93-21.69a108.86 108.86 0 0 0 38.44-54.94a12 12 0 0 0-3-11.97Zm-49.88 47.74A84 84 0 0 1 68.86 69.51a84.93 84.93 0 0 1 23.41-21.22Q92 52.13 92 56a108.12 108.12 0 0 0 108 108q3.87 0 7.71-.27a84.79 84.79 0 0 1-21.22 23.41Z" /></svg>
                    <div className="z-50 burger cursor-pointer lg:hidden" onClick={handleToggle}>
                        {toggled ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2.5"
                                    d="M3 6h18M3 12h18M3 18h18"
                                />
                            </svg> :
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
                                <path
                                    fill="currentColor"
                                    d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z" /></svg>
                        }
                    </div>
                </div>

            </div>

            {/* desktop */}
            <nav className='gap-5 hidden lg:flex'>
                <a className=' mx-3' href="/">Home</a>
                <a className=' mx-3' href="/about">About</a>
                <a className=' mx-3' href="/projects">Projects</a>
                <a className=' mx-3' href="/contact">Contact</a>
            </nav>

            {/* mobile */}

            <div className={`absolute flex justify-center z-20 min-h-screen hidden w-full top-0 left-0 bg-[#ffffff] pt-20 ${toggled ? 'hidden' : ''} `}>
                <nav className=' flex gap-6  flex-col'>
                    <a className=' mx-3' href="/">Home</a>
                    <a className=' mx-3' href="/about">About</a>
                    <a className=' mx-3' href="/projects">Projects</a>
                    <a className=' mx-3' href="/contact">Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Nav;

