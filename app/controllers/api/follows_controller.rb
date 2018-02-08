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
  end

  private
  def follow_params
    params.require(:follow).permit(:follower_id, :followed_id)
  end
end
