import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../Logos/notfound.png'

const NotFound = () => {
    return (
        <div className='text-center mt-7'>
            <img className='w-1/4 mt-3 mx-auto' src={notfound} alt="" />
            <h2 className='text-2xl'>This is A wrong place....</h2>
            <button className='bg-red-500 rounded-xl px-4 py-1 mt-2'><Link className='no-underline text-white' to='/home'>Go To Home</Link></button>
        </div>
    );
};

export default NotFound;