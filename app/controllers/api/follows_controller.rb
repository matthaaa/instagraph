class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follow_params)

    if @follow.save!
      @follower = @follow.follower
      @followees = @follow.followees
      @current_user = current_user
      render 'api/users/show'
    else
      render json: @follow.errors.full_messages
    end
  end

  def destroy
    @follow = Follow.find_by(
      follower_id: like_params[:follower_id],
      followed_id: like_params[:followed_id],
    )
    # @like = Like.find_by(id: params[:id])
    @user = @like.follower

    if @follow.destroy
      render 'api/users/show'
    else
      render json: @follow.errors.full_messages
    end
  end

  private
  def follow_params
    params.require(:follow).permit(:follower_id, :followed_id)
  end
end
