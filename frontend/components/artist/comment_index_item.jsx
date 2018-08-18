import React from 'react';
import { withRouter } from 'react-router-dom';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }

  handleDeleteComment(commentId) {
    this.props.deleteComment(commentId, this.props.artist.id);
  }


  render() {
    const comment = this.props.comment;
    const currentUser = this.props.currentUser;
    let deleteButton;
    if (currentUser && comment.user_id === currentUser.id) {
      deleteButton = <button className="comment-delete" onClick={() => this.handleDeleteComment(comment.id)}>Delete</button>
    } else {
      deleteButton = null;
    }

    return (
      <li key={comment.id}>
        <span className="comment-created-at">{comment.createdAt}</span>
        <div className="comment-body">
          <span>{comment.body}</span>
          {deleteButton}
        </div>
    </li>
    );
  }
}

export default withRouter(CommentIndexItem);
