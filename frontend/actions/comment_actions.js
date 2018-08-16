import * as ApiCommentUtil from '../util/comment_api_util';
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';


export const receiveComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment
  }
}

export const removeComment = (comment) => {
  return {
    type: REMOVE_COMMENT,
    commentId: comment.id,
    artistId: comment.artist_id
  }
};


export const createComment = (formData) => dispatch => (
  ApiCommentUtil.createComment(formData).then((comment) => dispatch(receiveComment(comment)))
);

export const deleteComment = (commentId, artistId) => dispatch => (
  ApiCommentUtil.deleteComment(commentId, artistId).then((commentId) => dispatch(removeComment(commentId)))
);
