
import { proxySession } from '@/supabase/proxy'
import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const response = await proxySession(request)

  // If redirected to login, return early
  if (response.status === 307) return response

  // Otherwise continue with your logic
  return new Response(JSON.stringify({ message: 'Session valid' }), {
    status: 200,
  })
}