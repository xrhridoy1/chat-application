// app/chat/page.tsx
import MainChatUi from '@/components/chatUi/MainChatUi'
import { redirect } from 'next/navigation'
import React from 'react'
import { createClient } from '@/lib/supabase/server'


const ChatPage = async () => {

    const supabase = await createClient()

    const {
        data: { user },
    } = await supabase.auth.getUser()


    if (!user) {
        redirect('/login')
    }
    
    return (
        <div className="p-3">
            <MainChatUi />
        </div>
    );
};

export default ChatPage;