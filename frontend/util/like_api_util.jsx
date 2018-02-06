export const fetchLike = (id) => (
  $.ajax({
    method: "GET",
    url: `api/likes/${id}`
  })
);

export const destroyLike = (postId, id) => (
  $.ajax({
    method: "DELETE",
    url: `api/posts/${postId}/likes/${id}`
  })
);
