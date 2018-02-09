class Api::CommentsController < ApplicationController
  def new
    @comment = Comment.new
  end

  def create
    @comment = Comment.new(comment_params)

    if @comment.save!
      @post = @comment.post
      render 'api/posts/show'
    else
      render json: @comment.errors.full_messages, status: 400
    end
  end

  def index
    @comments = Comment.all
  end

  def show
    @comment = Comment.find_by(id: params[:id])
    if @comment
      render :show
    else
      render json: 'Comment not found!', status: 404
    end
  end

  def update
  end

  def edit
  end

  def destroy
    @comment = Comment.find_by(
      user_id: comment_params[:user_id],
      post_id: comment_params[:post_id],
    )

    @post = @comment.post
    if @comment.destroy
      render 'api/posts/show'
    else
      render json: @comment.errors.full_messages
    end
  end

  private
  def comment_params
    params.require(:comment).permit(
      :body, :user_id, :post_id
    )
  end
end
