import * as ApiCommentUtil from '../util/comment_api_util';
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';


export const receiveComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment
  }
}

export const removeComment = ({ comment }) => {
  return {
    type: REMOVE_COMMENT,
    comment
  }
};


export const createComment = (formData) => dispatch => (
  ApiCommentUtil.createComment(formData).then((comment) => dispatch(receiveComment(comment)))
);

export const deleteComment = (userId, artistId) => dispatch => (
  ApiCommentUtil.deleteComment(userId, artistId).then((commentId) => dispatch(removeComment(commentId)))
);
