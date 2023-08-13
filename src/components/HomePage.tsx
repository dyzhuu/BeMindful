import PostCard from './PostCard';
import Image from 'next/image'
import Head from 'next/head'
import {useState, useEffect} from 'react'
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { Icon } from '@mui/material';
import { Button } from '@/components/ui/button';
import { PostButton } from '@/components/PostButton';
import { useQuery } from '@tanstack/react-query';

export const HomePage = ({id}: any) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['feed'],
    queryFn: async () => {
      const res = await fetch(
        `api/feed/${id}`,
      );
      if (res.ok) return await res.json();
    },
  });

  if (isLoading) {
    return('Loading')
  }

  return (
    <>
      <Head>
        <title>BeMindful - Keeping you mindful</title>
        <meta
          name='description'
          content='Get daily reminders to stay mindful in your life :)'
        />
        <link
          rel='icon'
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>☺️</text></svg>"
        />
      </Head>

      <div className='flex flex-col items-center p-4 bg-gradient-to-r from-background-start-rgb to-background-end-rgb'>
        <div className='flex justify-between items-center w-full'>
          <Link href='/friends'>
            {' '}
            {/* Link to Friends page */}
            <Image
              src='/images/friends.png'
              alt='Friends Icon'
              width={40}
              height={30}
            />
          </Link>
          <Link href='/home'>
            <h1 className='text-2xl font-bold text-foreground-rgb'>
              BeMindful
            </h1>
          </Link>
          <Link href='/profile'>
            {' '}
            {/* Link to Profile page */}
            <Image
              src='/images/user.png'
              alt='User Icon'
              width={40}
              height={30}
            />
          </Link>
        </div>
        
        <PostButton></PostButton>

        {data.map((post: any) => (
          <PostCard
            key={post.id}
            post={post}
            //user={currentUser}
          />
        ))}
      </div>
    </>
  );
};