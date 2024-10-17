import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

function Hero() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
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
        </div>
    )
}

export default Hero