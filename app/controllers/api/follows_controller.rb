class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new
  end

  def destroy
  end

  private
  def follow_params
    params.require(:follow).permit(:follower_id, :followed_id)
  end
end
