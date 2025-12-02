import AuthForm from '@/components/AuthForm/AuthForm';
import React from 'react';

const LoginPage = async () => {
    
    return (
        <div className='flex h-screen flex-col gap-10 justify-center items-center'>
            <h1 className='text-4xl font-bold'>First Login yourself</h1>
            <div>
                <AuthForm />
            </div>
        </div>
    );
};

export default LoginPage;