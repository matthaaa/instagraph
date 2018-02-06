export const fetchComment = (comment) => (
  $.ajax({
    method: "POST",
    url: `api/posts/${comment.post_id}/comment/${comment.id}`,
    data: {comment},
  })
);

export const destroyComment = (comment) => (
  $.ajax({
    method: "DELETE",
    url: `api/posts/${comment.post.id}/comments/${comment.id}`,
  })
);
