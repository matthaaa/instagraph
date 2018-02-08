json.user do
  json.partial! "api/users/user", user: @user
end

json.posts({})
json.posts do
  @user.posts.each do |post|
    json.set! post.id do
      json.partial! 'api/posts/post', post: post
    end
  end
end

json.follows({})
json.follows do
  @user.follows.each do |follow|
    json.set! follow.id do
      json.partial! 'api/follows/follow', follow: follow
    end
  end
end

json.followings({})
json.followings do
  @user.followings.each do |following|
    json.set! following.id do
      json.partial! 'api/follows/follow', follow: following
    end
  end
end
