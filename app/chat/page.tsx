import { createClient } from '@/utils/supabase/server';
import React from 'react';

const ChatePage = async () => {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser();
    console.log(user?.user_metadata)
    return (
        <div>
            hello
        </div>
    );
};

export default ChatePage;