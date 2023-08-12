import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './profile.module.css';
import Button from '@mui/material/Button';
import {useState, useEffect} from 'react'
import defaultpfp from "../assets/Default_pfp.svg"
import { Separator } from "@/components/ui/separator"
import FriendCard from './FriendCard';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  const [posts, setPosts] = useState([])
  const [user, setUser] = useState([])
  
  useEffect(() => {

    const userInfo = [
    { id: 1, name: 'user', pfp: '', streak: 3, bio: 'I am an upstanding and mindful person who is always looking to improve myself. I am a very kind person who is always looking to help others.'}
    ]

    const fetchedPosts = [
      { id: 1, name: "user", post: "I am an upstanding and mindful person who is always looking to improve myself. I am a very kind person who is always looking to help others." },
      { id: 2, name: "user", post: "After years of hard work, she finally achieved her dream and felt a deep sense of fulfillment." },
      { id: 3, name: "user", post: "The laughter of children playing in the park is a reminder of the innocence and happiness that life can bring." },
    ];
    setUser(userInfo[0]);
    setPosts(fetchedPosts);
  }, [])

  return (
    <div
      className={styles.main}
    >
      <h1 className="text-5xl font-bold text-stone-800 mt-10 mb-5">{user.name}</h1>
      <Image src={user.pfp || defaultpfp} className={styles.logo} alt="pfp"/>
      <h2 className="text-xl mt-1 w-80">{user.bio}</h2>

      <Separator className="my-4" />
      
      <div className={styles.messageContainer}>
        <h2>{user.streak}-day streak!</h2>
      </div>

      {posts.map((message) => (
        <FriendCard key={message.id} friend={message}/>
      ))}
    </div>
  )
}
