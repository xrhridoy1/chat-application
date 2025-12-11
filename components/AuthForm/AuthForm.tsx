import { signInWithGoogle } from '@/utils/action';
import React from 'react';
import Button from './Button';



const AuthForm = () => {
    return (
        <form action={signInWithGoogle}>
            <Button />
        </form>
    );
};

export default AuthForm;