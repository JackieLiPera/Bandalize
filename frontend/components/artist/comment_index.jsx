import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component{
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <ul className="comments-index"> <h2 className='artist-show-headers'>Fan Reviews</h2>
        {Object.values(this.props.comments).map((comment) => (
          <CommentIndexItem
            key={comment.id}
            comment={comment}
            currentUser={this.props.currentUser}
            deleteComment={this.props.deleteComment}
            artist={this.props.artist.id}
            />
        ))}
      </ul>
    );
  }
}

export default CommentIndex;
