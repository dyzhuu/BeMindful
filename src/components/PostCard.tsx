import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Toggle } from './ui/toggle';
import { Button } from './ui/button';
import { CommentButton } from './CommentButton';
import { useSession } from 'next-auth/react';

const PostCard = ({ post }: any) => {
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [liked, setLiked] = useState(post.likedByUser);
  const session = useSession();

  const handleAddComment = () => {
    if (commentText.trim() !== '') {
      setShowCommentBox(false);
      setCommentText('');
    }
  };

  const likesQuery = useQuery({
    queryKey: ['likes', post.id],
    queryFn: async () => {
      const res = await fetch(`api/post/${post.id}/likes`);
      if (res.ok) return await res.json();
    },
  });
  
  const likes = likesQuery.data

  const commentQuery = useQuery({
    queryKey: ['comments', post.id],
    queryFn: async () => {
      const res = await fetch(`api/post/${post.id}/comments`);
      if (res.ok) return await res.json();
    },
  });
  
  if (commentQuery.isLoading) {
    return <Skeleton className='h-[70%] w-[70%] m-[10px] p-[20px]'></Skeleton>;
  }

  const comments = commentQuery?.data?.comments

  async function likeAction() {
    if (liked) {
      setLiked(false);
    } else {
      setLiked(true);
      const res = await fetch(`api/post/${post.id}/likes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: session.data?.user?.id,
          postId: post.id
        }),
      });      
    }
  }

  return (
    <div className='friend-card'>
      <h2>{post.author.username}</h2>
      <p className='pb-3'>{post.content}</p>
      <div className='space-x-4'>
      <Button
        variant={'ghost'}
        className={`${liked && 'fill-red-600'} hover:bg-transparent p-0 m-0`}
        onClick={likeAction}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='1.3em'
          viewBox='0 0 512 512'
        >
          <path d='M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z' />
        </svg>
      </Button>
      <CommentButton postId={post.id}></CommentButton>
      </div>
      
      {comments && (
        <div>
          <p>Comments:</p>
          {comments.map((comment: any, index: number) => (
            <div key={index}>
              <p>
                {comment.user.username}: {comment.content}
              </p>
            </div>
          ))}
        </div>
      )}

      {showCommentBox && (
        <div>
          <textarea
            placeholder='Add a comment...'
            className='p-2 mt-1 border rounded w-4/5'
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <div className='mt-2'>
            <button
              className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded'
              onClick={handleAddComment}
            >
              Add Comment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;
