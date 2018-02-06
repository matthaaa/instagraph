class Api::CommentsController < ApplicationController
  def new
    @comment = Comment.new
  end

  def create
    @comment = Comment.new(comment_params)

    if @comment.save!
      render :show
    else
      render json: @comment.errors.full_messages, status: 400
    end
  end

  def index
    @comments = Comment.all
  end

  def show
  end

  def update
  end

  def edit
  end

  def destroy
  end

  private
  def comment_params
    params.require(:comment).permit(
      :body, :user_id, :post_id
    )
  end
end
