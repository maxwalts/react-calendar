"use client"
import Image from 'next/image'

import Calendar from '@/components/calendar'
import DragExample from '@/components/dragExample'
import Form from '@/components/form'

export default function Home() {
  return (
    <main>
      <Calendar />
      <DragExample />
      <Form />
    </main>
  )
}