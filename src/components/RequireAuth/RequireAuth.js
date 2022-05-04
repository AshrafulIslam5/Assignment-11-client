import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../Shared/Spinner/Spinner';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);
    const sendVerification = async () => {
        await sendEmailVerification(user.email);
        toast.error("Email Sent")
    }



    if (loading || sending) {
        return <Spinner></Spinner>
    }
    if (!user) {
        return <Navigate to='/signin' state={{ from: location }} replace></Navigate>
    }

    if (user.providerData[0].providerId === "password" && user.emailVerified === false) {
        return <div className='text-center mt-14'>
            <h2 className='text-xl font-semibold my-2'>Please check and Verify your Email</h2>
            <p className='text-lg my-2'>After verification, reload the page</p>
            <p className='my-3'>or</p>
            <button onClick={sendVerification} className='bg-red-500 text-white rounded-lg px-3 py-1 hover:bg-red-800'>Send Verification Again</button>
        </div>
    }
    return children;
};

export default RequireAuth;