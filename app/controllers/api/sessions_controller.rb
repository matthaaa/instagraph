class Api::SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by_creds(
      params[:user][:username],
      params[:user][:password],
    )

    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: [
        'Sorry, your password was incorrect. Please double-check ' +
        'your password.'
      ]
    end
  end

  def destroy
    if logged_in?
      logout
      render json: {}
    else
      render json: ['No user to sign out']
    end
  end
end
