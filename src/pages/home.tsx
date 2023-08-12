import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import styles from './home.module.css';
import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';

const inter = Inter({ subsets: ['latin'] });

export default function HomePage() {
  const [message, setMessage] = useState('')
  async function promptMessage() {
    const text = prompt('Enter mindful thought')
    if (text != null) {
      setMessage(text)
    }
    else {
      setMessage('No message entered')
    }
  }
  

  return (
    <div className={styles.main}>
      
      <div className={styles.inputContainer}>
        <Textarea/>
        <Button 
          variant='contained'
          onClick={promptMessage}
          className={styles.button}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
