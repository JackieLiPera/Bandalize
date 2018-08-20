import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component{
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <ul className="comments-index"> <h2 className='artist-show-headers'>Fan Reviews</h2>
        {this.props.artistComments.map((commentId) => (
          <CommentIndexItem
            key={commentId}
            comment={this.props.comments[commentId]}
            currentUser={this.props.currentUser}
            deleteComment={this.props.deleteComment}
            artist={this.props.artist.id}
            user={this.props.users[this.props.comments[commentId].user_id]}
            />
        ))}
      </ul>
    );
  }
}

export default CommentIndex;
