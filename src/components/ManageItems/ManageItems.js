import React, { useEffect, useState } from 'react';
import Spinner from '../Shared/Spinner/Spinner';
import ManageItem from './ManageItem';

const ManageItems = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const url = 'https://ashrafuls-assignment-11.herokuapp.com/laptops'
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    if (products.length === 0) {
        return <>
            <h2 className='mx-auto font-semibold text-center text-3xl w-1/2 border-4 border-red-600 border-t-0 border-x-0 pb-5 my-10'>All Laptops</h2>
            <Spinner></Spinner>
        </>
    }

    return (
        <div>
            <h2 className='mx-auto font-semibold text-center text-3xl w-1/2 border-4 border-red-600 border-t-0 border-x-0 pb-5 my-10'>All Laptops</h2>
            <div className='px-5 sm:px-20'>
                {
                    products.map(product => <ManageItem key={product._id} product={product}></ManageItem>)
                }
            </div>
        </div>
    );
};

export default ManageItems;