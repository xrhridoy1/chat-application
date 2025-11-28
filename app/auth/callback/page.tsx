
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export default async function AuthCallbackPage() {
    const supabase = await createClient();

    const { data: { user } } = await supabase.auth.getUser()

    if (user) {
        redirect('/') // ✅ Redirect to home after login
    }
}