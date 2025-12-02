import AuthForm from '@/components/AuthForm/AuthForm';
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import React from 'react';

const LoginPage = async () => {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
        redirect('/')
    }

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