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
    if (comment.user_id === currentUser.id) {
      deleteButton = <button onClick={() => this.handleDeleteComment(comment.id)}>Delete</button>
    } else {
      deleteButton = null;
    }

    return (
      <li key={comment.id}>
        {comment.createdAt}
          <br></br>
        {comment.body}
        {deleteButton}
    </li>
    );
  }
}

export default withRouter(CommentIndexItem);
