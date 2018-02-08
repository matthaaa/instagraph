json.extract! user, :id, :username, :full_name, :email, :img_url
json.post_ids user.posts.pluck :id
json.liked_posts user.liked_posts
json.followee_ids user.followees.pluck :id
json.follower_ids user.followers.pluck :id
json.follows_current_user user.followees.any? {|followee| current_user.id == followee.id}
json.current_user_follows user.followers.any? {|follower| current_user.id == follower.id}
