import React from 'react';
import CommentIndexItem from './comment_index_item';


const CommentIndex = ({ comments, currentUser, deleteComment, artist, users }) => {
  let CommentIndexItems;

  if (artist.comments.length === 0) {
    CommentIndexItems = <div> There are no reviews yet! </div>
  } else {
    CommentIndexItems = artist.comments.map((commentId) => {
      const comment = comments[commentId] || {};

      return (
        <CommentIndexItem
          key={commentId}
          comment={comment}
          currentUser={currentUser}
          deleteComment={deleteComment}
          artist={artist.id}
          user={users[comment.user_id]}
          />
      )
    })
  }


  return (
    <ul className="comments-index"> <h2 className='artist-show-headers'>Fan Reviews</h2>
      { CommentIndexItems }
    </ul>
  )
};

export default CommentIndex;
