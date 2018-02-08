json.user do
  json.partial! "api/users/user", user: @user
end

@user.posts.each do |post|
  json.posts do
    json.set! post.id do
      json.partial! 'api/posts/post', post: post
    end
  end
end

@user.follows.each do |follow|
  json.follows do
    json.set! follow.id do
      json.partial! 'api/follows/follow', follow: follow
    end
  end
end
