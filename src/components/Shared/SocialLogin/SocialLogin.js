import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import google from '../../../Logos/google.png';
import github from '../../../Logos/github.png';
import { useAuthState, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Spinner from '../Spinner/Spinner';
import axios from 'axios';

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub, userGit, loadingGit, errorGit] = useSignInWithGithub(auth);
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    const [user] = useAuthState(auth);
    
    if (loadingGit || loadingGoogle) {
        return <Spinner></Spinner>;
    }
    let GitErrorMsg;
    let GoogleErrorMsg;
    if (errorGoogle || errorGit) {
        GitErrorMsg = <p className='text-red-500 text-lg'>{errorGit?.message}</p>
        GoogleErrorMsg = <p className='text-red-500 text-lg'>{errorGoogle?.message}</p>
    }
    
    const handleGoogleSignIn = async () => {
        await signInWithGoogle();
        const email = user?.email;
        const { data } = await axios.post('https://ashrafuls-assignment-11.herokuapp.com/getToken', { email })
        localStorage.setItem('accessToken', data.accessToken)
        navigate(from, { replace: true });
    }
    const handleGithubSignIn = async () => {
        await signInWithGithub();
        const email = user?.email;
        const { data } = await axios.post('https://ashrafuls-assignment-11.herokuapp.com/getToken', { email })
        localStorage.setItem('accessToken', data.accessToken)
        navigate(from, { replace: true });
    }


    return (
        <div>
            <div className='mt-8 flex items-center'>
                <div style={{ height: '1px' }} className='w-2/4 bg-slate-600 mb-1'></div>
                <p className='mb-1 mx-3'>or</p>
                <div style={{ height: '1px' }} className='w-2/4 bg-slate-600 mb-1'></div>
            </div>
            {GitErrorMsg}
            {GoogleErrorMsg}
            <div className='flex flex-col md:flex-row justify-center gap-5 mt-4'>
                <button onClick={handleGoogleSignIn} className='bg-white rounded-lg px-14 border hover:border-red-500'><img className='w-14 mx-auto' src={google} alt="" /></button>
                <button onClick={handleGithubSignIn} className='bg-white rounded-lg px-14 border hover:border-red-500'><img className='w-12 mx-auto' src={github} alt="" /></button>
            </div>
        </div>
    );
};

export default SocialLogin;