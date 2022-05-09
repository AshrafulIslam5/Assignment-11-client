import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Logos/logo.png';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Spinner from '../Shared/Spinner/Spinner';
import { UserCircleIcon, MailIcon, LockClosedIcon } from '@heroicons/react/outline';
import axios from 'axios';

const SignUp = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth);
    const [sendEmailVerification, sending, VerificationError] = useSendEmailVerification(auth);


    if (loading || sending) {
        return <Spinner></Spinner>
    }
    let errorMsg;
    if (error || VerificationError) {
        errorMsg = <p className='text-red-500 text-lg'>{error?.message}</p>
    }
    const submit = async e => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passRef.current.value;

        await createUserWithEmailAndPassword(email, password);
        await sendEmailVerification(email);
        await updateProfile({ displayName: name });
        const { data } = await axios.post('https://ashrafuls-assignment-11.herokuapp.com/getToken', { email })
        localStorage.setItem('accessToken', data.accessToken)
        navigate('/');
    }
    return (
        <div>
            <div className='flex flex-col items-center mt-8'>
                <img className='w-32' src={logo} alt="" />
                <h3 className='text-3xl mt-2 text-red-500'>Sign Up here!</h3>
            </div>
            <div className='rounded-md shadow-sm w-2/4 mt-5 p-6 mx-auto bg-slate-50 -space-y-px'>
                <form onSubmit={submit} className="mt-8 space-y-6 " action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div>
                        <div className='mb-5 relative'>
                            <label htmlFor="name" className="text-red-500">
                                Name
                            </label>
                            <UserCircleIcon className='pointer-events-none w-12 h-8 absolute top-1/2 transform -translate-y-1/2 z-10 left-3 mt-4  border-y-0 border-l-0 border-r-2  border-red-600 hidden md:block text-red-600' />
                            <input
                                ref={nameRef}
                                name="name"
                                type="text"
                                autoComplete="text"
                                required
                                className="appearance-none rounded-2xl relative block w-full px-3 md:pl-20  border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 border-2 focus:z-0 mt-2 sm:text-sm"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className='mb-5 relative'>
                            <label htmlFor="email-address" className="text-red-500">
                                Email address
                            </label>
                            <MailIcon className='pointer-events-none w-12 h-8 absolute top-1/2 transform -translate-y-1/2 z-10 left-3 mt-4  border-y-0 border-l-0 border-r-2  border-red-600 hidden md:block text-red-600' />
                            <input
                                ref={emailRef}
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="z-0 appearance-none rounded-2xl relative block w-full px-3 md:pl-20 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 border-2 focus:z-0 mt-2 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        <div className='relative'>
                            <label htmlFor="password" className="text-red-500">
                                Password
                            </label>
                            <LockClosedIcon className='pointer-events-none w-12 h-8 absolute top-1/2 transform -translate-y-1/2 z-10 left-3 mt-4  border-y-0 border-l-0 border-r-2  border-red-600 hidden md:block text-red-600' />
                            <input
                                ref={passRef}
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-2xl relative block w-full px-3 md:pl-20  border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 border-2 focus:z-0 mt-2 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                        <div className="text-sm my-5">
                            <h2>Already have an account? <Link to='/signin'><button className="font-medium  text-indigo-600 hover:text-indigo-500 hover:underline">Sign In</button></Link></h2>
                        </div>
                        {errorMsg}
                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mt-5"
                            >
                                Sign up
                            </button>
                        </div>
                    </div>
                </form>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default SignUp;