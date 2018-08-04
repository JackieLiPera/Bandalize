import * as ApiCommentUtil from '../util/comment_api_util';
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";


export const receiveComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment
  }
};

export const removeComment = (commentId) => ({
  type: REMOVE_COMMENT,
  commentId
});


export const createComment = (body, userId, eventId) => dispatch => (
  ApiCommentUtil.createComment(body, userId, eventId).then((comment) => dispatch(receiveComment(comment)))
);

export const deleteComment = (userId, eventId) => dispatch => (
  ApiCommentUtil.deleteComment(userId, eventId).then((commentId) => dispatch(removeComment(commentId)))
);
