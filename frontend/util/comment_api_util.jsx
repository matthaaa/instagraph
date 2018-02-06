export const fetchComment = (comment) => (
  $.ajax({
    method: "POST",
    url: `api/comments`,
    data: {comment},
  })
);

export const destroyComment = (comment) => (
  $.ajax({
    method: "DELETE",
    url: `api/comments/${comment.id}`,
  })
);
