import React from 'react';

const Product = ({ product }) => {
    const { name, price, img, quantity, description, supplierName } = product;
    
    return (
        <div className='flex flex-col justify-center items-center border border-red-500 rounded-lg text-center p-6'>
            <h2 className='text-xl font-semibold'><strong>Supply from: </strong><span className='text-red-500'>{ supplierName }</span></h2>
            <img className='w-3/4' src={img} alt="" />
            <h2 className='text-lg mb-5 font-semibold'>{name}</h2>
            <h2><strong>Price: </strong>{ price }</h2>
            <h2 title={description}><strong>Description: </strong>{ description.slice(0, 70) }......</h2>
            <h2 className='text-lg'><strong>Quantity: </strong>{quantity} pcs</h2>
            <button className='bg-red-600 text-white px-6 py-1 rounded-md mt-4 hover:bg-red-800'>Update</button>
        </div>
    );
};

export default Product;