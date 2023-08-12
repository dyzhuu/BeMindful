import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './index.module.css';
import Button from '@mui/material/Button';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  return (
    <div
      className={styles.main}
    >
      <h1 className="text-6xl font-bold text-stone-800"><span className='text-6xl font-bold text-stone-800'>Be</span>Healthy</h1>
      <p className="text-2xl mt-1">Your health is our priority</p>
      <Button className="mt-9" variant="contained" href="#">Sign in with Google!</Button>
    </div>
  )
}
