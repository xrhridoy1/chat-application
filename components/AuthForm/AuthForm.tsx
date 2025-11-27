'use client'

import { signInWithGoogle } from '@/utils/action';
import React from 'react';

const AuthForm = () => {
    return (
        <form action={signInWithGoogle} >
            <button className='py-3 px-7 bg-slate-800 rounded text-white font-bold cursor-pointer'>Sign in With Google</button>
        </form>
    );
};

export default AuthForm; 