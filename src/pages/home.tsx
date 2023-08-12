import FriendCard from '../components/FriendCard';
import Image from 'next/image'
import Head from 'next/head'
import {useState, useEffect} from 'react'
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreateIcon from '@mui/icons-material/Create';
import GroupIcon from '@mui/icons-material/Group';
import styles from './home.module.css'
import { Icon } from '@mui/material';

const Home = () => {
  const [friends, setFriends] = useState<any[]>([]);
  const session = useSession()

  console.log(session.data?.user)

  function popup() {
  }

  useEffect(() => {
    // Fetch data from database or API
    // Example using dummy data
    const fetchedFriends = [
      { id: 1, name: "john", post: "have a great day uigbrgiubogeoirgbelb" },
      { id: 2, name: "jack", post: "have a great day" },
    ];
    setFriends(fetchedFriends);
  }, []);

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
      
    <div className="flex flex-col items-center p-4 bg-gradient-to-r from-background-start-rgb to-background-end-rgb">
      <div className="flex justify-between items-center w-full">
        <button onClick={popup}> {/* Link to Friends page */}
          <CreateIcon fontSize='large'/>
        </button>
        <Link href="/home">
            <h1 className="text-2xl font-bold text-foreground-rgb">BeHealthy</h1>
        </Link>
        <Link href="/profile"> {/* Link to Profile page */}
          <AccountCircleIcon fontSize='large'/>
        </Link>
      </div>

      {friends.map(friend => (
        <FriendCard key={friend.id} friend={friend} />
      ))}
      
    </div>
      
   </>
  );
};

export default Home;
