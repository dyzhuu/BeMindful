import React, { useState } from 'react';
import { Button } from '@mui/material';
import defaultpfp from '../../public/images/Default_pfp.svg'
import Image from 'next/image';
import styles from './AddFriendCard.module.css';
import { useSession } from 'next-auth/react';

const AddFriendCard = ({ friend }: any) => {
  const [isFollowing, setIsFollowing] = useState(false)
  const session = useSession()

  async function followAction() {
    if (isFollowing) {
      setIsFollowing(false);
      const res = await fetch(`api/user/follow`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          followerId: session.data?.user?.id,
          followingId: friend.id,
        }),
      });
    } else {
      setIsFollowing(true);
      const res = await fetch(`api/user/follow`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          followerId: session.data?.user?.id,
          followingId: friend.id,
        }),
      });
    }
  }
  return (
    <div className={`friend-card ${styles.friendCard}`}>
      <h2 className='ml-5 mr-5'>{friend.username}</h2>
      <Button variant={isFollowing ? 'contained' : 'outlined'} onClick={followAction} className='w-[130px]'>
        {isFollowing ? 'following' : 'follow'}
      </Button>
    </div>
  );
};

export default AddFriendCard;
