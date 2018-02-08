class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follow_params)

    if @follow.save!

      @user = User.find_by(id: @follow.followed_id)
      @current_user = User.find_by(id: @follow.follower_id)
      render 'api/users/show'
    else
      render json: @follow.errors.full_messages
    end
  end

  def destroy
    @follow = Follow.find_by(
      follower_id: follow_params[:follower_id],
      followed_id: follow_params[:followed_id],
    )

    @user = User.find_by(id: @follow.follower_id)
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
