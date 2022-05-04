import React from 'react';

const InventoryBrand = ({ brand }) => {
    const { companyName, img } = brand;
    return (
        <div  className='cursor-pointer flex flex-col md:flex-row border-2 border-red-500 rounded-3xl px-6 py-2 justify-center items-center'>
            <img className='w-1/4 mr-9' src={img} alt="" />
            <h2 className='text-2xl text-red-500'>{companyName}</h2>
        </div>
    );
};

export default InventoryBrand;