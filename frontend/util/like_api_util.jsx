export const fetchLikes = () => (
  $.ajax({
    method: "GET",
    url: `api/likes`,
  })
);

export const fetchLike = (like) => (
  $.ajax({
    method: "POST",
    url: `api/likes`,
    data: {like},
  })
);

export const destroyLike = (like) => (
  $.ajax({
    method: "DELETE",
    url: `api/likes/${like.id}`,
  })
);
