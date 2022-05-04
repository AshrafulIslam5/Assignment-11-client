import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Product from './Product';

const Products = () => {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        const url = 'https://ashrafuls-assignment-11.herokuapp.com/laptops'
        fetch(url)
            .then(res => res.json())
            .then(data => setBrands(data));
    }, []);


    const products = brands.map(brand => brand.Products[Math.floor(Math.random() * 5)]);
    return (
        <div>
            <h2 id='s' className='font-semibold text-2xl text-center py-9 text-white mt-36 mb-24 gradient'>Our Company are now only limited to <span className='text-fuchsia-200 font-bold underline'> Razer, Samsung, Acer, Asus, Hp and Lenovo</span></h2>
            <h2 className='mx-auto font-semibold text-center text-3xl w-1/2 border-4 border-red-600 border-t-0 border-x-0 pb-5'>Few Of Our Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14 px-6 md:px-20'>
                {
                    products.map(product => <Product key={product.key} product={product}></Product>)

                }
            </div>
            <div className='text-center mt-11 gradient py-3'>
                <p className='font-semibold text-3xl mb-4 text-white'>Want to see all products?</p>
                <Link to={'/inventory'}><button className='text-white bg-red-500 px-4 py-1 rounded-lg text-xl'>Inventory</button></Link>
            </div>
        </div>
    );
};

export default Products;