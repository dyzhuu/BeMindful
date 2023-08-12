import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './profile.module.css';
import {useState, useEffect} from 'react'
import defaultpfp from '../../public/images/Default_pfp.svg'
import { Separator } from "@/components/ui/separator"
import FriendCard from '@/components/FriendCard';

const inter = Inter({ subsets: ['latin'] })

interface user {
  id: number,
  name: string,
  pfp: string,
  streak: number,
  bio: string
}

export default function Home() {
  const router = useRouter()
  const [posts, setPosts] = useState<any[]>([])
  const [user, setUser] = useState<user>({id: 0, name: '', pfp: '', streak: 0, bio: ''})
  
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
      <div className="flex justify-between items-center w-full static">
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

      <h1 className="text-5xl font-bold text-stone-800 mt-10 mb-5">{user.name}</h1>
      <Image src={user.pfp || defaultpfp} className={styles.logo} alt="pfp"/>
      <p className="text-sm mt-1 w-80">{user.bio}</p>
      
      <div className={styles.messageContainer}>
        <h2>{user.streak}-day streak!</h2>
      </div>

      <h2>Posts:</h2>

      <div className={styles.posts}>
        {posts.map((message) => (
          <FriendCard key={message.id} friend={message}/>
        ))}
      </div> 
    </div>
  )
}
