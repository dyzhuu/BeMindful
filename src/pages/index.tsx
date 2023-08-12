import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './index.module.css';
import Button from '@mui/material/Button';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>BeHealthy - Keeping you mindful</title>
        <meta name="description" content="Get daily reminders to stay mindful in your life :)" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>☺️</text></svg>"
        />
      </Head>
      <div className={styles.main}>
        <h1 className="text-6xl font-bold text-stone-800">
          <span className="text-6xl font-bold text-stone-800">Be</span>Healthy
        </h1>
        <p className="text-2xl mt-1">Your health is our priority</p>
        <Button className="mt-9" variant="contained" href="#">
          Sign in with Google!
        </Button>
      </div>
    </>
  );
}
