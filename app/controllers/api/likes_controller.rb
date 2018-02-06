class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)

    if @like.save!
      @post = Post.find_by(post_id: params[:post_id])
      render :show
    else
      render json: @like.errors.full_messages
    end
  end

  def destroy
    @like = Like.find_by(
      post_id: like_params[:post_id],
      user_id: like_params[:user_id],
    )

    if @like.destroy
      @post = Post.find_by(post_id: params[:post_id])
      render :show
    else
      render json: @like.errors.full_messages
    end
  end

  private
  def like_params
    params.require(:like).permit(:user_id, :post_id)
  end
end
