import MainChatUi from '@/components/chatUi/MainChatUi';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import React from 'react';

const ChatePage = async () => {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser()

    
    if (!user) {
        redirect('/login')  
    }

    return (
        <div className='p-3'>
            <MainChatUi />
        </div>
    );
};

export default ChatePage;