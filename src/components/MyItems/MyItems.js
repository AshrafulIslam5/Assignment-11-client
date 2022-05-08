// import { signOut } from 'firebase/auth';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useNavigate } from 'react-router-dom';
// import axiosSecret from '../../api/axiosSecret';
import auth from '../../firebase.init';
import Spinner from '../Shared/Spinner/Spinner';
import MyItem from './MyItem';

const MyItems = () => {
    const [user] = useAuthState(auth);
    // const navigate = useNavigate()
    const [addedProducts, setAddedProducts] = useState([])
    useEffect(() => {
        const getAddedProducts = async () => {
            const email = user.email;
            const url = `https://ashrafuls-assignment-11.herokuapp.com/myItems?email=${email}`;
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            setAddedProducts(data);
        }
        getAddedProducts();

    }, [user])
    if (addedProducts === []) {
        return <Spinner></Spinner>
    }
    return (
        <div>
            <h2 className='mx-auto font-semibold text-center text-3xl w-1/2 border-4 border-red-600 border-t-0 border-x-0 pb-5 my-10'>Your Products</h2>
            <div className='px-5 sm:px-20'>
            {
                addedProducts.map(product => <MyItem key={product._id} product={product}></MyItem>)
            }
            </div>
        </div>
    );
};

export default MyItems;