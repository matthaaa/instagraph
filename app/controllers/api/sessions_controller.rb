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
    elsif !User.find_by_username(params[:user][:username])
      render json: [
        'The username you entered doesn\'t belong to an account. ' +
        'Please check your username and try again.'
      ], status: 404
    else
      render json: [
        'Sorry, your password was incorrect. Please double-check ' +
        'your password.'
      ], status: 404
    end
  end

  def destroy
    if logged_in?
      logout
      render json: {}
    else
      render json: ['No user to sign out'], status: 400
    end
  end
end
