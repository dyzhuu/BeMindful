import FriendCard from '../components/FriendCard';
import Image from 'next/image'
import Head from 'next/head'
import {useState, useEffect} from 'react'
import Link from 'next/link';

const Home = () => {
  const [friends, setFriends] = useState<any[]>([]);

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
        <Link href="/friends"> {/* Link to Friends page */}
          
            <Image
              src="/images/friends.png"
              alt="Friends Icon"
              width={40}
              height={30}
            />
          
        </Link>
        <Link href="/home">
            <h1 className="text-2xl font-bold text-foreground-rgb">BeHealthy</h1>
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
      

      {friends.map(friend => (
        <FriendCard key={friend.id} friend={friend} />
      ))}
      
    </div>
      
    </>
  );
};

export default Home;
