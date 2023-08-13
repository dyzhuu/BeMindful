import React from 'react';
import { Button } from '@mui/material';
import defaultpfp from '../../public/images/Default_pfp.svg'
import Image from 'next/image';
import styles from './AddFriendCard.module.css';

const AddFriendCard = ({ addfriend }: any) => {
  return (
    <div className={`friend-card ${styles.friendCard}`}>
      <Image src={addfriend.pfp || defaultpfp} alt="Profile Picture" className="w-10 h-10 rounded-full" />

      <h2 className="w-10 ml-5 mr-5">{addfriend.name}</h2>
      <Button variant='outlined' >Follow</Button>
    </div>
  );
};

export default AddFriendCard;
