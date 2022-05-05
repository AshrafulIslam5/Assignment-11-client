import React, { useEffect, useState } from 'react';
import Spinner from '../Shared/Spinner/Spinner';
import InventoryBrand from './InventoryBrand';

const Inventory = () => {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        const url = 'https://ashrafuls-assignment-11.herokuapp.com/laptops';
        fetch(url)
            .then(response => response.json())
            .then(data => setBrands(data))
    }, []);
    if (brands.length === 0) {
        return <>
            <h2 className='mx-auto font-semibold text-center text-3xl w-1/2 border-4 border-red-600 border-t-0 border-x-0 pb-5 my-10'>Our Brands</h2>
            <Spinner></Spinner>
        </>
    }
    return (
        <div>
            <h2 className='mx-auto font-semibold text-center text-3xl w-1/2 border-4 border-red-600 border-t-0 border-x-0 pb-5 my-10'>Our Brands</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-7 md:px-16'>
                {
                    brands.map(brand => <InventoryBrand key={brand._id} brand={brand}></InventoryBrand>)
                }
            </div>
        </div>
    );
};

export default Inventory;