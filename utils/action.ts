'use server'

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";


const signInWithGoogle = async () => {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: `${process.env.SITE_URL}/auth/callback`,
            queryParams: {
                access_type: 'offline',
                prompt: 'consent',
            },
        },

    })
    if (error) {
        console.log(error)
    }
    if (data?.url) {
        redirect(data.url)
    }
}

export { signInWithGoogle }
