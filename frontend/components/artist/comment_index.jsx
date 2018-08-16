import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component{
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <ul className="comments-index"> <h2 className='comments-header'>Fan Reviews</h2>
        {Object.values(this.props.comments).map((comment) => (
          <CommentIndexItem
            key={comment.id}
            comment={comment}
            currentUser={this.props.currentUser}
            deleteComment={this.props.deleteComment}
            />
        ))}
      </ul>
    );
  }
}

export default CommentIndex;
