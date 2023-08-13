import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './profile.module.css';
import {useState, useEffect} from 'react'
import FriendCard from '@/components/FriendCard';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';

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
      { id: 4, name: "user", post: "The laughter of children playing in the park is a reminder of the innocence and happiness that life can bring." },
    ];
    setUser(userInfo[0]);
    setPosts(fetchedPosts);
  }, [])

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
          <SettingsIcon sx={{ fontSize: 40 }}/>
        </Link>
      </div>
      
      <h1 className="text-5xl font-bold text-stone-800 mt-10 mb-5">{user.name}</h1>
      <p className="text-sm mt-1 w-80">{user.bio}</p>
      
        <div className={`${"bg-gradient-to-r from-red-500 to-yellow-500"} p-2 rounded-md inline-block mt-2`}>
          <h2 className="text-white text-sm">{user.streak}-day streak!</h2>
        </div>

      <h2 className={'text-xl mt-5'}>Posts:</h2>

      <div className={styles.posts}>
        {posts.map((message) => (
          <FriendCard key={message.id} friend={message}/>
        ))}
      </div> 
    </div>
  )
}
