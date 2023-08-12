import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './index.module.css';
import Button from '@mui/material/Button';
import {useState, useEffect} from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [pfp, setpfp] = useState('')
  return (
    <div
      className={styles.main}
    >
      <div>
        <h1 className="text-6xl font-bold text-stone-800">{username}</h1>
        <Image src={pfp} className="w-96 h-96" alt="pfp"/>
        <p className="text-2xl mt-1">Your health is our priority</p>
        <Button className="mt-9" variant="contained" href="#">Sign in with Google</Button>
      </div>
    </div>
  )
}
