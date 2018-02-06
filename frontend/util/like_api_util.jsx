export const fetchLike = (like) => (
  $.ajax({
    method: "GET",
    url: `api/posts/${like.post_id}likes/${like.id}`,
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
