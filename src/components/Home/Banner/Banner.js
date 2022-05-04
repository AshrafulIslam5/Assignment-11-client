import React from 'react';
import './Banner.css'
import logo from '../../../Logos/logo.png';
import mouse from '../../../Logos/scroll.png'

const Banner = () => {
    return (
        <section className='px-0 md:px-9 lg:px-0 relative banner flex flex-col justify-center items-center text-white'>
            <h2 className='z-10 text-xl md:text-6xl flex flex-col md:flex-row items-center gap-4'><img className='w-24' src={logo} alt="" /> Welcome To The Star WareHouse </h2>
            <h2 className='z-10 text-lg md:text-3xl flex flex-col md:flex-row items-center gap-4 mt-3'>The warehouse of Star Laptops </h2>
            <a href="#s" className='absolute bottom-1 '><img className='cursor-pointer' src={mouse} alt="" /></a>
        </section>
    );
};

export default Banner;