import React from 'react';
import { useNavigate } from 'react-router-dom';
import google from '../../../Logos/google.png';
import github from '../../../Logos/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Spinner from '../Spinner/Spinner';

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub, userGit, loadingGit, errorGit] = useSignInWithGithub(auth);
    if (userGoogle || userGit) {
        navigate('/')
    }
    if (loadingGit || loadingGoogle) {
        return <Spinner></Spinner>;
    }
    let GitErrorMsg;
    let GoogleErrorMsg;
    if (errorGoogle || errorGit) {
        GitErrorMsg = <p className='text-red-500 text-lg'>{errorGit?.message}</p>
        GoogleErrorMsg = <p className='text-red-500 text-lg'>{errorGoogle?.message}</p>
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
                <button onClick={() => signInWithGoogle()} className='bg-white rounded-lg px-14 border hover:border-red-500'><img className='w-14 mx-auto' src={google} alt="" /></button>
                <button onClick={() => signInWithGithub()} className='bg-white rounded-lg px-14 border hover:border-red-500'><img className='w-12 mx-auto' src={github} alt="" /></button>
            </div>
        </div>
    );
};

export default SocialLogin;