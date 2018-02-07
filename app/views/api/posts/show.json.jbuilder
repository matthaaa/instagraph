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
