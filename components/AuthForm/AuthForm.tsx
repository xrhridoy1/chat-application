'use client'

import { signInWithGoogle } from '@/utils/action';
import React from 'react';
import { useFormStatus } from 'react-dom';
import { Spinner } from '../ui/spinner';

function SubmitButton() {
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
}

const AuthForm = () => {
    return (
        <form action={signInWithGoogle}>
            <SubmitButton />
        </form>
    );
};

export default AuthForm;