import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../Shared/Spinner/Spinner';
import InventoryItem from './InventoryItem';

const Inventory = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const url = 'https://ashrafuls-assignment-11.herokuapp.com/laptops'
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    if (products.length === 0) {
        return <>
            <h2 className='font-semibold text-2xl text-center py-9 text-white gradient'>Our Company are now only limited to
                <span className='text-fuchsia-200 font-bold underline'> Razer, Samsung, Acer, Asus, Hp and Lenovo</span>
                <div className='flex flex-col justify-center'>
                    <h2 className='text-white text-2xl text-center mt-6'>Want To add Another Product?</h2>
                    <button onClick={() => navigate('/addProduct')} className='text-white mx-auto mt-3 bg-red-500 px-4 py-1 rounded-lg text-xl mb-6'>Add a New Product?</button>
                </div>
            </h2>

            <h2 className='mx-auto font-semibold text-center text-3xl w-1/2 border-4 border-red-600 border-t-0 border-x-0 pb-5 my-10'>Our Products</h2>
            <Spinner></Spinner>
        </>
    }

    return (
        <div className=''>
            <h2 className='font-semibold text-2xl text-center py-9 text-white gradient'>Our Company are now only limited to
                <span className='text-fuchsia-200 font-bold underline'> Razer, Samsung, Acer, Asus, Hp and Lenovo</span>
                <div className='flex flex-col justify-center'>
                    <h2 className='text-white text-2xl text-center mt-6'>Want To add Another Product?</h2>
                    <button onClick={() => navigate('/addProduct')} className='text-white mx-auto mt-3 bg-red-500 px-4 py-1 rounded-lg text-xl mb-6'>Add a New Product?</button>
                </div>
            </h2>

            <h2 className='mx-auto font-semibold text-center text-3xl w-1/2 border-4 border-red-600 border-t-0 border-x-0 pb-5 my-10'>Our Products</h2>
            <div className='px-4 md:px-20'>
                {
                    products.map(product => <InventoryItem key={product._id} product={product}></InventoryItem>)
                }
            </div>
        </div>
    );
};

export default Inventory;