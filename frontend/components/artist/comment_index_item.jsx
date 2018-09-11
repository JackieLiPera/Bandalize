import React from "react";
import { withRouter } from "react-router-dom";

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.comment = this.props.comment;
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
    this.generateDeleteButton = this.generateDeleteButton.bind(this);
    this.generateAuthorName = this.generateAuthorName.bind(this);
  }

  handleDeleteComment(commentId) {
    this.props.deleteComment(commentId, this.props.artist.id);
  }

  generateDeleteButton() {
    if (
      this.props.currentUser &&
      this.comment &&
      this.comment.user_id === this.props.currentUser.id
    ) {
      return (
        <button
          className="comment-delete"
          onClick={() => this.handleDeleteComment(this.comment.id)}
        >
          Delete
        </button>
      );
    } else {
      return null;
    }
  }

  generateAuthorName() {
    if (
      this.props.currentUser &&
      this.comment.user_id === this.props.currentUser.id
    ) {
      return this.currentUser.firstname + " " + this.currentUser.lastname;
    } else {
      return this.props.user.firstname + " " + this.props.user.lastname;
    }
  }

  render() {
    const comment = this.props.comment;
    const currentUser = this.props.currentUser;
    const photo = comment.photo || null;

    return (
      <li key={comment.id}>
        <span className="comment-author">{this.generateAuthorName()}</span>
        <br />
        <span className="comment-created-at">{comment.createdAt}</span>
        <div className="comment-body">
          <span>{comment.body}</span>
          <br />
          <img className="comment-photo" src={photo} />
          <br />
          {this.generateDeleteButton()}
        </div>
      </li>
    );
  }
}

export default withRouter(CommentIndexItem);
