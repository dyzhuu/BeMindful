import Link from 'next/link';
import Image from 'next/image';
import FriendCard from './FriendCard';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [friends, setFriends] = useState([]);

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
  );
};

export default Home;
