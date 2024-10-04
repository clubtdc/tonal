"use client";
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { LuMenu } from "react-icons/lu";
import { useState, useEffect } from 'react';

const navBarItems = [
    { title: 'Equipments', href: '/equipment' },
    { title: 'Workouts', href: '/workout' },
    { title: 'Stories', href: '#' },
    { title: 'Try Tonal', href: '/try-tonal' },
]


const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            }
            else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    return (
        <nav className={`flex flex-row justify-between w-full h-max z-50 items-center px-36 py-4 border-b-black sticky top-0 left-0 transition-all duration-300 ${isScrolled ? 'bg-white text-black shadow-sm' : 'bg-transparent text-white'}`}>
            <div className='flex flex-row items-center justify-center gap-5'>
                <LuMenu size={35} />
                <Image
                    src={isScrolled ? "/assets/logo-dark.webp" : "/assets/tonal-logo-202004.webp"}
                    alt="Optimized Logo"
                    width={150}
                    height={150}
                />
            </div>
            <div className='hidden md:flex space-x-8'>
                {navBarItems.map((item) => (
                    <Link key={item.title} href={item.href} className={`text-lg font-semibold py-2 border-b-transparent hover:border-b ${isScrolled ? 'hover:border-black' : 'hover:border-white'}`}>
                        {item.title}
                    </Link>
                ))}
            </div>
            <div>
                <button className='px-5 py-2 bg-[#11ddc4] font-semibold border border-[#11ddc4] text-black hover:text-white  hover:bg-transparent'>Pricing</button>
            </div>
        </nav>
    )
}

export default NavBar