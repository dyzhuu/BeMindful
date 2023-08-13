import React from 'react'
import AddFriendCard from './AddFriendCard';
import styles from './FriendsList.module.css'
import { useQuery } from '@tanstack/react-query';
import { loadStaticPaths } from 'next/dist/server/dev/static-paths-worker';
import { useSession } from 'next-auth/react';

export default function FriendsList() {

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['friendlist'],
    queryFn: async () => {
      const res = await fetch(`api/user`);
      if (res.ok) return await res.json();
    },
  });

  if (isSuccess) {
    const friends = data.allUsers;

    return (
      <div className={styles.posts}>
        {friends.map((account: any) => (
          <AddFriendCard key={account.id} friend={account} />
        ))}
      </div>
    );
  }
}
