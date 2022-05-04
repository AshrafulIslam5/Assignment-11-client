import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../Logos/logo.png';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import Spinner from '../Shared/Spinner/Spinner';
const SignIn = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    
    
    if (user) {
        navigate(from, { replace: true });
    }

    if (loading) {
        return <Spinner></Spinner>
    }
    let errorMsg;
    if (error) {
        errorMsg = <p className='text-red-500 text-lg'>{error?.message}</p>
    }

    const submit = async e => {
        const email = emailRef.current.value;
        const password = passRef.current.value;
        await signInWithEmailAndPassword(email, password);
    }
    return (
        <div>
            <div className='flex flex-col items-center mt-8'>
                <img className='w-32' src={logo} alt="" />
                <h3 className='text-3xl mt-2'>Sign in to your account</h3>
            </div>
            <div className='rounded-md shadow-sm w-2/4 mt-5 p-6 mx-auto bg-slate-50 -space-y-px'>
                <form onSubmit={submit} className="mt-8 space-y-6 " action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div>
                        <div className='mb-5'>
                            <label htmlFor="email-address" className="text-red-500">
                                Email address
                            </label>
                            <input
                                ref={emailRef}
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-2xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 border-2 focus:z-10 mt-2 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="text-red-500">
                                Password
                            </label>
                            <input
                                ref={passRef}
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-2xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 border-2 focus:z-10 mt-2 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="text-sm my-5">
                                <h2>First time here? <Link to='/signup'><button className="font-medium  text-indigo-600 hover:text-indigo-500 hover:underline">Sign Up</button></Link></h2>
                            </div>

                            <div className="text-sm my-5">
                                <button className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline">
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
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default SignIn;


