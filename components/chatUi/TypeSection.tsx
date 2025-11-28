import React from 'react';
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import { ArrowUpIcon } from "lucide-react"
import { createClient } from '@/utils/supabase/server';

const TypeSection = () => {

    const handleMassege = async (formData: FormData) => {
        // 'use server'
        // const supabase = await createClient();
        // const textData = formData.get('text') as string;
        // console.log(textData)

        // const { error } = await supabase.from('masseges').insert({ text: textData }).select();
        // if (error) {
        //     console.log(error)
        // }

        'use server'

        console.log('🔴 Server Action Started');

        try {
            const supabase = await createClient();
            console.log('✅ Supabase client created');

            const textData = formData.get('text') as string;
            console.log('📝 Text data:', textData);

            if (!textData || textData.trim() === '') {
                console.log('❌ Empty message');
                return;
            }

            const { data, error } = await supabase
                .from('masseges')
                .insert([{
                    text: textData,
                    created_at: new Date().toISOString()
                }])
                .select();

            if (error) {
                console.error('❌ Supabase Error:', error);
                return;
            }

            console.log('✅ Message inserted successfully:', data);

        } catch (error) {
            console.error('💥 Unexpected error:', error);
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