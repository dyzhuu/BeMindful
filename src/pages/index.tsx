import FriendCard from './FriendCard';
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './index.module.css';
import Button from '@mui/material/Button';

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

  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});

  
  const handleLike = (postId) => {
    setLikes(prevLikes => ({
      ...prevLikes,
      [postId]: (prevLikes[postId] || 0) + 1,
    }));
  };

  // Function to handle commenting on a post
  const handleComment = (postId, user, comment) => {
    setComments(prevComments => ({
      ...prevComments,
      [postId]: [...(prevComments[postId] || []), { user, comment }],
    }));
  };
  


  return (
        
    <>
        <Head>
        <title>BeMindful - Keeping you mindful</title>
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
      <textarea 
        placeholder="Enter your thoughts..."
        className={`p-2 mt-4 border rounded`}
        
        //value={postText}
        //onChange={handlePostChange}

      />
      
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mt-2 rounded"
        //onClick={handlePostSubmit}
      >
        Post
      </button> 

      {friends.map(friend => (
        <FriendCard
          key={friend.id}
          friend={friend}
          //user={currentUser}
          handleLike={handleLike}
          handleComment={handleComment}
          likes={likes}
          comments={comments}
        />
      ))}

    </div>
      
   </>
  );
};

export default Home;
