import React from 'react';
import { useNavigate } from 'react-router-dom';

const InventoryItem = ({ product }) => {
    const { name, _id, quantity, supplierName, img } = product;
    const navigate = useNavigate();
    const handleUpdate = () => {
        navigate(`/inventory/${_id}`)
    }
    return (
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
            <button onClick={handleUpdate} className='text-white bg-red-500 px-3 py-1 rounded-lg hover:bg-red-800 m-0 sm:mt-5'>Update</button>
        </div>
    );
};

export default InventoryItem;