import React, { useEffect, useState } from 'react';
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
            <h2 id='s' className='font-semibold text-2xl text-center py-9 text-white my-36 gradient'>Our Company are now only limited to <span className='text-fuchsia-200 font-bold underline'> Razer, Samsung, Acer, Asus, Hp and Lenovo</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14 px-6 md:px-20'>
            {products.map(product => <Product key={product.key} product={product}></Product>)}
        </div>
        </div>
    );
};

export default Products;