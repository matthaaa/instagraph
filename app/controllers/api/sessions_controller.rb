class Api::SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_creds(
      params[:user][:username],
      params[:user][:password],
    )

    if user
      login(user)
    else
      flash.now[:errors] = [
        'Sorry, your password was incorrect. Please double-check ' +
        'your password.'
      ]
      render :new
    end
  end

  def destroy
    if logged_in?
      logout
      render 'api/users/show'
    else
      flash.now[:errors] = ['No user to sign out']
      render :new
    end
  end
end
