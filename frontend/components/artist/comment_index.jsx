import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component{
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <ul className="comments-index">
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
