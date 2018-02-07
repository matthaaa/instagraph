json.extract! post, :id, :author_id, :img_url, :description, :created_at, :likes
json.comment_ids post.comments.pluck :id
json.user post.user
json.time_ago post.time_ago
