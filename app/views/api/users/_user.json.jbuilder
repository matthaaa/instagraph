json.extract! user, :id, :username, :full_name, :email, :img_url
json.post_ids user.posts.pluck :id
json.liked_posts user.liked_posts
