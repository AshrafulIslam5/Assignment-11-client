import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const ManageItem = ({ product }) => {
    const [user] = useAuthState(auth)
    const { name, _id, quantity, supplierName, img } = product;
    const navigate = useNavigate();
    const handleUpdate = () => {
        navigate(`/manageitems/${_id}`)
    }

    const deleteProduct = async () => {
        const ok = window.confirm('Are you sure?');
        if (ok) {
            axios.delete(`https://ashrafuls-assignment-11.herokuapp.com/laptops/${_id}`)
                .then(res => {
                    window.location.reload()
                    toast.error("item deleted")
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
                    <button onClick={handleUpdate} className='text-white bg-blue-500 px-3 py-1 rounded-lg hover:bg-blue-800 sm:mr-3 mt-2 sm:mt-0'>Update</button>
                    <button onClick={deleteProduct} className=' text-white bg-red-500 px-3 py-1 rounded-lg hover:bg-red-800 mt-2 sm:mt-0'>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ManageItem;