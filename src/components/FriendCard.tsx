import React, { useState } from 'react';

const FriendCard = ({ friend, handleLike, handleComment, likes, comments }) => {
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [commentText, setCommentText] = useState('');

  const handleAddComment = () => {
    if (commentText.trim() !== '') {
      handleComment(friend.id, commentText);
      setShowCommentBox(false);
      setCommentText('');
    }
  };

  return (
    <div className="friend-card">
      <h2>{friend.name}</h2>
      <p className="pb-3">{friend.post}</p>
      <button onClick={() => handleLike(friend.id)}>Like</button>
      <button className="pl-3" onClick={() => setShowCommentBox(true)}>Comment</button>
      <p>Likes: {likes[friend.id] || 0}</p>
      {comments[friend.id] && (
        <div>
          <p>Comments:</p>
          {comments[friend.id].map((comment, index) => (
            <div key={index}>
              <p>{comment.user.name}: {comment.comment}</p>
            </div>
          ))}
        </div>
      )}
      
      {showCommentBox && (
        <div>
          <textarea
            placeholder="Add a comment..."
            className="p-2 mt-1 border rounded w-4/5"
            value={commentText}
            onChange={e => setCommentText(e.target.value)}
          />
          <div className="mt-2">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
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

export default FriendCard;
