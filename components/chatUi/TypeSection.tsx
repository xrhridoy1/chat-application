import React from 'react';
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import { ArrowUpIcon } from "lucide-react"
import { createClient } from '@/utils/supabase/server';

const TypeSection = () => {

    const handleMassege = async (formData: FormData) => {
        "use server"

        const supabase = await createClient();
        const { data: { user }, } = await supabase.auth.getUser()

        const text = formData.get('text') as string;
        if (user && text) {
            const { error } = await supabase
                .from('messages')
                .insert({
                    email: user.email,
                    name: user.user_metadata?.full_name || 'Anonymous',
                    avatar: user.user_metadata?.avatar_url || '',
                    content: text
                });
            if (error) {
                console.error('error something', error)
            }
        }
    }

    return (
        <form action={handleMassege} className=' mt-3 pt-3 flex gap-2'>
            <Input type="text" placeholder="Type to massege" name='text' />
            <Button variant="outline" size="icon" aria-label="Submit">
                <ArrowUpIcon />
            </Button>
        </form>
    );
};

export default TypeSection;