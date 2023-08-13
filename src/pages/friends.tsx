import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './friends.module.css';
import {useState, useEffect} from 'react'
import AddFriendCard from '@/components/AddFriendCard';
import HomeIcon from '@mui/icons-material/Home';

const inter = Inter({ subsets: ['latin'] })
interface user {
  id: number,
  name: string,
  pfp: string,
  following: boolean,
}

export default function Home() {
  const router = useRouter()
  const [accounts, setAccounts] = useState<any[]>([{id: 0, name: '', pfp: '', following: false}])
  
  useEffect(() => {

    const accounts = [
      { id: 1, name: "user", following: false},
      { id: 2, name: "user", following: false},
      { id: 3, name: "user", following: false},
      { id: 4, name: "user", following: false},
      { id: 5, name: "user", following: false},
      { id: 6, name: "user", following: false},
      { id: 7, name: "user", following: false},
      { id: 8, name: "user", following: false},
      { id: 9, name: "user", following: false},
    ];
    setAccounts(accounts);
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
            <Image
              src="/images/user.png"
              alt="User Icon"
              width={40}
              height={30}
            />
        </Link>
      </div>
      
      <h1 className="text-5xl font-bold text-stone-800 mt-10 mb-5">Friends</h1>

      <div className={styles.posts}>
        {accounts.map((account) => (
          <AddFriendCard key={account.id} addfriend={account}/>
        ))}
      </div> 
    </div>
  )
}

