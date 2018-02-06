export const fetchComment = (comment) => (
  $.ajax({
    method: "POST",
    url: `api/posts/${comment.post_id}/comments`,
    data: {like},
  })
);

export const destroyComment = (comment) => (
  $.ajax({
    method: "DELETE",
    url: `api/posts/${comment.post_id}/comments/${comment.id}`,
    data: {like},
  })
);
