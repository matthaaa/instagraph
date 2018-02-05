json.extract! user, :id, :username, :full_name, :email, :img_url

json.posts user.posts do |post|
  json.partial! "api/posts/post", post: post
end
