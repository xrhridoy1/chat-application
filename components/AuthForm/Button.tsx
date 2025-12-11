'use client'
import React from 'react';
import { useFormStatus } from 'react-dom';
import { Spinner } from '../ui/spinner';

const Button = () => {
    const { pending } = useFormStatus();

    return (
        <button
            className="py-3 px-7 bg-slate-800 rounded text-white font-bold cursor-pointer"
            disabled={pending}
        >
            {pending ? <div className='flex gap-3 items-center'>
                <Spinner /> <span>Sign in With Google</span>
            </div> : 'Sign in With Google'}
        </button>
    );
};

export default Button;