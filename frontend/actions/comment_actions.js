import * as ApiCommentUtil from '../util/comment_api_util';
export const REMOVE_COMMENT = "REMOVE_COMMENT";
import { receiveEvent } from '../actions/event_actions';


export const removeComment = (commentId) => ({
  type: REMOVE_COMMENT,
  commentId
});

export const createComment = (formData) => dispatch => (
  ApiCommentUtil.createComment(formData).then((event) => dispatch(receiveEvent(event)))
);

export const deleteComment = (userId, eventId) => dispatch => (
  ApiCommentUtil.deleteComment(userId, eventId).then((commentId) => dispatch(removeComment(commentId)))
);
