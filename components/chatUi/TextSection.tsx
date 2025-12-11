'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import Image from 'next/image'

interface DataType {
  id: string
  created_at: string
  name: string
  email: string
  avatar: string
  content: string
}

const supabase = createClient()

export default function TextSection() {
  const [messages, setMessages] = useState<DataType[]>([])

  useEffect(() => {
    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .order('created_at', { ascending: true })

      if (error) {
        console.error(error)
      } else {
        setMessages(data as DataType[])
      }
    }

    fetchMessages()

    const channel = supabase
      .channel('messages-channel')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'messages' },
        (payload) => {
          console.log('Realtime payload:', payload)
          if (payload.new) {
            setMessages((prev) => [...prev, payload.new as DataType])
          }
        }
      )
      .subscribe()

    return () => {
      channel.unsubscribe()
    }
  }, [])

  return (
    <div className="border h-[70vh] mt-3 p-3 overflow-auto">
      {messages.map((x) => (
        <section className="flex mb-2" key={x.id}>
          <div className="h-20 w-20">
            <Image
              src={x.avatar || '/default-avatar.png'}
              alt=""
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          <div className="w-full">
            <p className="font-medium">{x.email}</p>
            <p className="bg-slate-100 rounded p-2">{x.content}</p>
          </div>
        </section>
      ))}
    </div>
  )
}