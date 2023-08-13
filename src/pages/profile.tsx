import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './profile.module.css';
import {useState, useEffect} from 'react'
import defaultpfp from '../../public/images/Default_pfp.svg'
import PostCard from '@/components/PostCard';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import { useSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';
import { Card } from '@/components/ui/card';

const inter = Inter({ subsets: ['latin'] })
interface user {
  id: number,
  name: string,
  pfp: string,
  streak: number,
  bio: string
}

export default function ProfilePage() {
  const session = useSession()
  
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['feed'],
    queryFn: async () => {
      const res = await fetch(`api/user/${session.data?.user?.email}`);
      if (res.ok) return await res.json();
    },
  });

  if (isSuccess && session.status == 'authenticated') {
    return (
      <div className={styles.main}>
        <div className='flex justify-between items-center w-full'>
          <Link href='/home'>
            {' '}
            {/* Link to Friends page */}
            <HomeIcon sx={{ fontSize: 40 }} />
          </Link>
          <Link href='/home'>
            <h1 className='text-2xl font-bold text-foreground-rgb'>
              BeMindful
            </h1>
          </Link>
          <Link href='/profile'>
            {' '}
            {/* Link to Profile page */}
            <SettingsIcon sx={{ fontSize: 40 }} />
          </Link>
        </div>

        <h1 className='text-5xl font-bold text-stone-800 mt-10 mb-5'>
          {session.data?.user?.name}
        </h1>
        <div
          className={`${'bg-gradient-to-r from-red-500 to-yellow-500'} p-2 rounded-md inline-block mt-2`}
        >
          <h2 className='text-white text-sm'>{data.user.streak}-day streak!</h2>
        </div>

        <h2 className={'text-xl mt-5'}>Posts:</h2>

        
        <div className='space-y-5'>{data.user.posts.map((post: any, index: number) => {
          return (
            <Card className='p-5' key={index}>{post.content}</Card>
          );
        })}
        </div>
      </div>
    );
  }
}
