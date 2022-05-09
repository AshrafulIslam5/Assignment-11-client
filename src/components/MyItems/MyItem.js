import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const MyItem = ({ product }) => {
    const { name, _id, quantity, supplierName, img } = product;

    const deleteFromMyItems = async () => {
        const url = `https://ashrafuls-assignment-11.herokuapp.com/myItems/${_id}`;
        const ok = window.confirm('Are you sure?');
        if (ok) {
            await axios.delete(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    toast.error(`Deleted, Please reload the page and check your inventory and delete *${name}*`)
                })
        }
    }

    return (
        <div>
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
                    <button onClick={deleteFromMyItems} className=' text-white bg-red-500 px-3 py-1 rounded-lg hover:bg-red-800 mt-2 sm:mt-0'>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyItem;