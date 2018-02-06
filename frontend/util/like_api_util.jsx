export const fetchLike = (like) => (
  $.ajax({
    method: "POST",
    url: `api/posts/${like.post_id}/likes`,
    data: {like},
  })
);

export const destroyLike = (like) => (
  $.ajax({
    method: "DELETE",
    url: `api/posts/${like.post_id}/likes/${like.id}`,
    data: {like},
  })
);
