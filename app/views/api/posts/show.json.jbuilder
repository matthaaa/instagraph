json.post do
  json.partial! "api/posts/post", post: @post
end

@post.comments.each do |comment|
  json.comments do
    json.set! comment.id do
      json.partial! 'api/comments/comment', comment: comment
    end
  end
end

@post.likes.each do |like|
  json.likes do
    json.set! like.id do
      json.partial! 'api/likes/like', like: like
    end
  end
end

json.user @post.user
