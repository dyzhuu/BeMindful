import { HomePage } from '@/components/HomePage'
import { useSession } from 'next-auth/react'
import React from 'react'

export default function Home() {
  const session = useSession()

  if (session.status === 'loading') {
    return('Loading')
  }
  return (
    <HomePage id={session.data?.user?.id}></HomePage>
  )
}
