import { ArrowLeftIcon } from '@heroicons/react/outline';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Add from '../Inventory/Buttons/Add';
import Addone from '../Inventory/Buttons/Addone';
import Deliver from '../Inventory/Buttons/Deliver';
import Delivered from '../Inventory/Buttons/Delivered';
import Details from '../Inventory/Buttons/Details';
import Spinner from '../Shared/Spinner/Spinner';

const UpdateItem = () => {
    const { id } = useParams();
    const [laptop, setLaptop] = useState({})
    useEffect(() => {
        const url = `https://ashrafuls-assignment-11.herokuapp.com/laptops/${id}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setLaptop(data))
    })
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
                    <Details laptop={laptop}></Details>
                    <Deliver quantity={quantity} id={_id}></Deliver>
                    <Delivered quantity={quantity} id={_id} key={_id}></Delivered>
                    <Addone quantity={quantity} id={_id}></Addone>
                    <Add quantity={quantity} id={_id}></Add>
                </div>
            </div>
            <Link to={'/manageitems'}><button className='mt-8 hover:bg-red-800 bg-red-500 text-white flex justify-center items-center px-3 py-1  text-2xl mx-auto'><ArrowLeftIcon className='w-10 mr-3'></ArrowLeftIcon> Go To Manage Items</button></Link>
        </div>
    );
};

export default UpdateItem;