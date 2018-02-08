json.extract! post, :id, :author_id, :img_url, :description, :created_at
json.comment_ids post.comments.pluck :id
json.like_ids post.likes.pluck :id
json.time_ago post.time_ago
json.current_user_likes post.likes.any? {|like| current_user.id == like.user_id}
json.likes_count post.likes.length
