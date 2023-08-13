import { HomePage } from '@/components/HomePage'
import { useSession } from 'next-auth/react'
import React from 'react'
import { CircularProgress } from '@mui/material'

export default function Home() {
  const session = useSession({required: true})

  if (session.status === 'loading') {
    return(<div className={`w-screen h-screen flex items-center justify-center`}>
      <CircularProgress size="10rem" />
    </div>)
  }
  return (
    <HomePage id={session.data?.user?.id}></HomePage>
  )
}
