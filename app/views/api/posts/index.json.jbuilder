json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.partial! 'post', post: post
    end
  end
end

json.comments do
  @posts.each do |post|
    post.comments.each do |comment|
      json.set! comment.id do
        json.partial! 'api/comments/comment', comment: comment
      end
    end
  end
end
