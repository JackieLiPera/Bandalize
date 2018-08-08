import * as ApiCommentUtil from '../util/comment_api_util';
import { receiveEvent } from '../actions/event_actions';
export const REMOVE_COMMENT = "REMOVE_COMMENT";


export const removeComment = ({ comment }) => {
  return {
    type: REMOVE_COMMENT,
    comment
  }
};

export const createComment = (formData) => dispatch => (
  ApiCommentUtil.createComment(formData).then((event) => dispatch(receiveEvent(event)))
);

export const deleteComment = (userId, eventId) => dispatch => (
  ApiCommentUtil.deleteComment(userId, eventId).then((commentId) => dispatch(removeComment(commentId)))
);
