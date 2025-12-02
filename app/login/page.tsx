import AuthForm from '@/components/AuthForm/AuthForm';
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import React from 'react';

const LoginPage = async ({ searchParams }: { searchParams: { code?: string } }) => {
    const supabase = await createClient();

    if (searchParams.code) {
        const { data, error } = await supabase.auth.exchangeCodeForSession(searchParams.code);
        if (error) {
            console.error('OAuth exchange error:', error.message);
        }
    }

    const { data: { user } } = await supabase.auth.getUser();

    if (user) {
        redirect('/');
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