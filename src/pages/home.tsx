import FriendCard from '../components/FriendCard';
import Image from 'next/image'
import Head from 'next/head'
import {useState, useEffect} from 'react'
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { Icon } from '@mui/material';
import { Button } from '@/components/ui/button';
import { PostButton } from '@/components/PostButton';

const Home = () => {
  const session = useSession()

  console.log(session.data?.user)

  const friends = [
    { id: 1, name: 'John', post: 'Wishing everyone a wonderful day! ☀️' },
    { id: 2, name: 'Alice', post: 'Embracing the beauty of life today. 🌸' },
    { id: 3, name: 'Michael', post: 'Stay positive and keep smiling! 😄' },
    { id: 4, name: 'Sophia', post: 'Sending good vibes to all my friends! ✨' },
    { id: 5, name: 'David', post: 'Chasing dreams and making memories. 🌟' },
    { id: 6, name: 'Emily', post: 'Grateful for every moment. 🙏❤️' },
    { id: 7, name: 'Oliver', post: 'Enjoying the little things in life. 🍃' },
    { id: 8, name: 'Ava', post: 'Spreading love and positivity today! 💖' },
    { id: 9, name: 'Ethan', post: 'Laughing with friends is the best therapy. 😆' },
    { id: 10, name: 'Mia', post: 'Stay curious and keep exploring! 🌍🔍' },
  ];

  return (
    <>
      <Head>
        <title>BeHealthy - Keeping you mindful</title>
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
              BeHealthy
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

        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>


<footer className="bg-white p-8">
  <div className="container mx-auto text-center">
    <h1 className="text-2xl font-bold mb-4 text-black">BeHealthy - An Online Graduation Project</h1>
    <p className="text-xl text-black" role="img" aria-label="calendar">📅</p> 
    <p className="mb-2 text-black">Started on 12/08 Ended on 13/08</p>
    <p className="text-xl text-black" role="img" aria-label="calendar">📅</p>
    <p className="text-lg mb-4 text-black">Team:</p>
    <p className="mb-2 text-black">
      <a href="https://github.com/eric-profile" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">Eric</a>, 
      <a href="https://github.com/david-profile" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">David</a>, 
      <a href="https://github.com/raza-profile" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">Raza</a>, 
      <a href="https://github.com/hunter-profile" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">Hunter</a>, 
      <a href="https://github.com/yvonne-profile" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">Yvonne</a>, 
      and 
      <a href="https://github.com/patricia-profile" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">Patricia</a>
    </p>
  </div>
</footer>

      
    </>
  );
};

export default Home;
