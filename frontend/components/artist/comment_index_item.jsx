import React from 'react';
import { withRouter } from 'react-router-dom';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.comment = this.props.comment;
    this.currentUser = this.props.currentUser;
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
    this.generateDeleteButton = this.generateDeleteButton.bind(this);
    this.generateAuthorName = this.generateAuthorName.bind(this);
  }

  handleDeleteComment(commentId) {
    this.props.deleteComment(commentId, this.props.artist.id);
  }

  generateDeleteButton() {
    if (this.currentUser && this.comment.user_id === this.currentUser.id) {
      return <button className="comment-delete" onClick={() => this.handleDeleteComment(comment.id)}>Delete</button>
    } else {
      return null;
    }
  }

  generateAuthorName() {
    if (this.comment.user_id === this.currentUser.id) {
      return this.currentUser.firstname + " " + this.currentUser.lastname;
    } else {
      return this.props.user.firstname + " " +this.props.user.lastname;
    }
  }


  render() {
    const comment = this.props.comment;
    const currentUser = this.props.currentUser;
    let deleteButton = this.generateDeleteButton();
    let author = this.generateAuthorName();

    return (
      <li key={comment.id}>
        <span className="comment-author">{author}</span>
        <br></br>
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
