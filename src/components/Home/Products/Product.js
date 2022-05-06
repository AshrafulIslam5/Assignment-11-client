import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, price, img, quantity, description, supplierName } = product;
    const navigate = useNavigate()
    const redirect = id => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div className='flex flex-col justify-center items-center border border-red-500 rounded-lg text-center p-6'>
            <h2 className='text-xl font-semibold'><strong>Supply from: </strong><span className='text-red-500'>{ supplierName }</span></h2>
            <img className='w-3/4 border-4 border-red-600 border-x-0 mb-4' src={img} alt="" />
            <h2 className='text-lg mb-5 font-semibold'>{name}</h2>
            <h2><strong>Price: </strong>{ price }</h2>
            <h2 title={description}><strong>Description: </strong>{ description.slice(0, 70) }......</h2>
            <h2 className='text-lg'><strong>Quantity: </strong>{quantity} pcs</h2>
            <button onClick={() => redirect(_id)} className='bg-red-600 text-white px-6 py-1 rounded-md mt-4 hover:bg-red-800'>Update</button>
        </div>
    );
};

export default Product;