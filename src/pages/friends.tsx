import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './friends.module.css';
import {useState, useEffect} from 'react'
import AddFriendCard from '@/components/AddFriendCard';
import HomeIcon from '@mui/icons-material/Home';
import FriendsList from '@/components/FriendsList';

const inter = Inter({ subsets: ['latin'] })
interface user {
  id: number,
  name: string,
  pfp: string,
  following: boolean,
}

export default function Home() {

  return (
    <div className={styles.main}>
      <div className='flex justify-between items-center w-full'>
        <Link href="/home"> {/* Link to Friends page */}
          <HomeIcon sx={{ fontSize: 40 }}/>
        </Link>
        <Link href="/home">
          <h1 className="text-2xl font-bold text-foreground-rgb">BeMindful</h1>
        </Link>
        <Link href="/profile"> {/* Link to Profile page */}
            <Image
              src="/images/user.png"
              alt="User Icon"
              width={40}
              height={30}
            />
        </Link>
      </div>
      
      <h1 className="text-5xl font-bold text-stone-800 mt-10 mb-5">Friends</h1>
      <FriendsList></FriendsList>
    </div>
  )
}

