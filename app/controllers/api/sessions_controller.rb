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
    if user
      logout
      render {}
    else
      flash.now[:errors] = ['No user to sign out']
    end
  end
end
