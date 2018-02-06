json.extract! post, :id, :author_id, :img_url, :description, :created_at, :likes
json.user post.user
json.time_ago post.time_ago
