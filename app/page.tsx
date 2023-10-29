"use client"
import Image from 'next/image'

import Calendar from '@/components/calendar'
import Form from '@/components/form'

export default function Home() {
  return (
    <main>
      <Calendar />
      <Form />

    </main>
  )
}