import React, { Fragment, useRef, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../Logos/logo.png';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import Spinner from '../Shared/Spinner/Spinner';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MailIcon, LockClosedIcon } from '@heroicons/react/outline';
import { Dialog, Transition } from '@headlessui/react'

const SignIn = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const cancelButtonRef = useRef(null)
    const emailRef = useRef('');
    const passRef = useRef('');
    const ResetPassRef = useRef('');
    const navigate = useNavigate();
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    // for pass reset
    const [sendPasswordResetEmail, sending, ResetError] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true });
    }

    if (loading || sending) {
        return <Spinner></Spinner>
    }
    let errorMsg;
    if (error || ResetError) {
        errorMsg = <p className='text-red-500 text-lg'>{error?.message}</p>
    }

    const submit = async e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        await signInWithEmailAndPassword(email, password);
    }


    const resetPass = async () => {
        const ResetPassEmail = ResetPassRef.current.value;
        if (ResetPassEmail === '') {
            toast.error("Please give email");
        }
        else {
            await sendPasswordResetEmail(ResetPassEmail);
            toast.error("Email Sent", {
                icon: false
            });
        }
    }
    return (
        <div>
            <div className='flex flex-col items-center mt-8'>
                <img className='w-32' src={logo} alt="" />
                <h3 className='text-3xl mt-2'>Sign in to your account</h3>
            </div>
            <div className='rounded-md shadow-sm w-3/4 sm:w-2/4 mt-5 p-6 mx-auto bg-slate-50 -space-y-px'>
                <form onSubmit={submit} className="mt-8 space-y-6 " action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div>
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
                        <div className="flex justify-between items-center">
                            <div className="text-sm my-5">
                                <h2>First time here? <Link to='/signup'><button className="font-medium  text-indigo-600 hover:text-indigo-500 hover:underline">Sign Up</button></Link></h2>
                            </div>

                            <div className="text-sm my-5">
                                <button className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline" onClick={() => setOpen(true)}>
                                    Forgot your password?
                                </button>
                            </div>
                        </div>
                        {errorMsg}
                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mt-5"
                            >
                                Sign in
                            </button>
                        </div>
                    </div>
                </form>

                
                {/* Using Modal From Tailwind */}
                <Transition.Root show={open} as={Fragment}>
                    <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={() => setOpen(false)}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        <div className="fixed z-10 inset-0 overflow-y-auto">
                            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                                {/* This element is to trick the browser into centering the modal contents. */}
                                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                                    &#8203;
                                </span>
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                >
                                    <Dialog.Panel className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle">
                                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                            <div className="">
                                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                                        Send reset email
                                                    </Dialog.Title>

                                                    <div className="p-6">
                                                        <label className='text-red-500 mb-2 ml-2' htmlFor='email'>Email</label>
                                                        <input className="mx-auto appearance-none rounded-2xl block  border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 border-2 mt-2 sm:text-sm" type="email" placeholder='Your Email Address' ref={ResetPassRef} required />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                            <button
                                                type="button"
                                                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                                onClick={resetPass}
                                            >
                                                Send Eamil
                                            </button>
                                            <button
                                                type="button"
                                                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 active:bg-red-600 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                                onClick={() => setOpen(false)}
                                                ref={cancelButtonRef}
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>
                <SocialLogin></SocialLogin>
            </div>

        </div>
    );
};

export default SignIn;