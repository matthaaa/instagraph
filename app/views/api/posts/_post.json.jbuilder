json.extract! post, :id, :author_id, :img_url, :description, :created_at
json.comment_ids post.comments.pluck :id
json.like_ids post.likes.pluck :id
json.time_ago post.time_ago
