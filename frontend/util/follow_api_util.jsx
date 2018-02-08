export const createFollow = (follow) => (
  $.ajax({
    method: "POST",
    url: `api/follows`,
    data: {follow},
  })
);

export const destroyFollow = (follow) => (
  $.ajax({
    method: "DELETE",
    url: `api/follows`,
    data: {follow},
  })
);
