import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

function Hero() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <div className='bg-[#0d0c1d] min-h-screen overflow-hidden'>
                <nav className='flex justify-between items-center px-6 py-6 lg:px-12 relative'>
                    <div className='flex items-center space-x-2'>
                        <span className='text-pink-500 font-bold text-4xl'>B</span>
                        <span className='text-white font-semibold text-3xl'>AL</span>
                    </div>
                    <dir className="lg:hidden">
                        <button className='text-white' onClick={toggleMenu}>{isMenuOpen ? <IoClose /> : <RxHamburgerMenu />}</button>
                    </dir>

                    <ul className={`${isMenuOpen ? "block" : "hidden"} lg:flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 text-white absolute lg:static top-20 left-0 w-full lg:w-auto bg-[#0d0c1d] lg:bg-transparent p-4 lg:p-0 z-10`}>
                        <li className='px-4 py-1 rounded-full border border-gray-600 hover:border-pink-500 hover:text-white cursor-pointer transition-all'>Home</li>
                        <li className='px-4 py-1 rounded-full border border-gray-600 hover:border-pink-500 hover:text-white cursor-pointer transition-all'>About</li>
                        <li className='px-4 py-1 rounded-full border border-gray-600 hover:border-pink-500 hover:text-white cursor-pointer transition-all'>Services</li>
                        <li className='px-4 py-1 rounded-full border border-gray-600 hover:border-pink-500 hover:text-white cursor-pointer transition-all'>Projects</li>
                        <li className='px-4 py-1 rounded-full border border-gray-600 hover:border-pink-500 hover:text-white cursor-pointer transition-all'>Contact</li>
                    </ul>
                    <button className='hidden lg:block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full hover:opacity-80 text-lg font-medium'>Contact Us</button>
                </nav>

                {/* HERO SECTION */}

                <div className='flex flex-col items-center justify-center text-center py-24 px-3'>
                    <h1 className='text-6xl font-bold text-white'>Advanced Analytics To<br />
                        <span className=' text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500'>Grow Your Business</span>
                    </h1>
                    <p className='text-gray-400 mt-6 max-w-xl text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi cupiditate modi voluptatem? Laudantium perspiciatis adipisci ea dignissimos quidem.</p>

                    <div className='mt-10 flex space-x-6'>
                        <button className='bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full hover:opacity-80 text-lg font-medium'>Get Started</button>
                        <button className='bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 text-lg font-medium'>Learn More</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero