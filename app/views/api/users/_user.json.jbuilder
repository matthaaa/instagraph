json.extract! user, :id, :username, :full_name, :email, :img_url
json.post_ids user.posts.pluck :id
json.liked_posts user.liked_posts
json.followee_ids user.follows.pluck :id
json.follower_ids user.followers.pluck :id
