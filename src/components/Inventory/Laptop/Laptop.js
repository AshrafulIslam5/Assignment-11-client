import { ArrowLeftIcon } from '@heroicons/react/outline';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../../Shared/Spinner/Spinner';
import Add from '../Buttons/Add';
import Delivered from '../Buttons/Delivered';

const Laptop = () => {
    const { id } = useParams();
    const [laptop, setLaptop] = useState({})
    useEffect(() => {
        const url = `https://ashrafuls-assignment-11.herokuapp.com/laptops/${id}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setLaptop(data))
    }, [])
    const { name, _id, quantity, supplierName, img } = laptop;
    if (!name) {
        return <Spinner></Spinner>
    }
    return (
        <div className='px-5 md:px-20 mt-10'>
            <h2 className='mx-auto font-semibold text-center text-3xl w-1/2 border-4 border-red-600 border-t-0 border-x-0 pb-5 my-10'>Update this product</h2>
            <div className='sm:flex flex-col sm:flex-row justify-between items-center border-2 border-red-500 rounded-lg p-6 mb-5'>
                <div className='flex flex-col sm:flex-row justify-start items-center text-center sm:text-left'>
                    <img className='w-2/4 sm:w-1/12' src={img} alt='' />
                    <div className='sm:ml-14'>
                        <h2 className='font-semibold text-lg sm:text-xl '>{name}</h2>
                        <h2><strong>Product Id: </strong>{_id}</h2>
                        <h2 ><strong>Quantity: </strong>{quantity}</h2>
                        <h2><strong>Supplier: </strong>{supplierName}</h2>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row'>
                    <button className='mt-2 mr-3 text-white bg-indigo-500 px-3 py-1 rounded-lg hover:bg-indigo-800'>Details</button>
                    <Delivered quantity={quantity} id={_id} key={_id}></Delivered>
                    <Add quantity={quantity} id={_id}></Add>
                    <button className='mt-2 mr-3 text-white bg-red-500 px-3 py-1 rounded-lg hover:bg-red-800'>Delete</button>
                </div>
            </div>
            <button className='mt-8 hover:bg-red-800 bg-red-500 text-white flex justify-center items-center w-48 text-2xl mx-auto'><ArrowLeftIcon className='w-3/12 mr-3'></ArrowLeftIcon> Go back</button>
        </div>
    );
};

export default Laptop;