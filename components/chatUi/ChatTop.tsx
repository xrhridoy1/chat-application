import { createClient } from '@/lib/supabase/server';
import Image from 'next/image';
import React from 'react';

const ChatTop = async () => {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser();
    const metadata = user?.user_metadata

    const fullName = metadata?.full_name;
    const picture = metadata?.picture;

    return (
        <div className='flex justify-between items-center border-b pb-4'>
            <h1 className='font-bold text-2xl'>Chat Now</h1>
            <div className='flex items-center gap-3'>
                <h1 className='hidden md:block font-bold'>{fullName}</h1>
                <Image
                    src={picture}
                    alt={fullName}
                    width={40}
                    height={40}
                    className='rounded-full'
                />
            </div>
        </div>
    );
};

export default ChatTop;