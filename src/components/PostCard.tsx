import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

const PostCard = ({ post }: any) => {
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [commentText, setCommentText] = useState('');

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
    return
  }

  const comments = commentQuery?.data?.comments

  return (
    <div className='friend-card'>
      <h2>{post.author.username}</h2>
      <p className='pb-3'>{post.content}</p>
      <button onClick={() => null}>Like</button>
      <button className='pl-3' onClick={() => setShowCommentBox(true)}>
        Comment
      </button>
      <p>Likes: {likes || 0}</p>
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
