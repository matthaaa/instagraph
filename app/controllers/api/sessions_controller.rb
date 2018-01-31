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
      redirect_to links_url
    else
      flash.now[:errors] = [
        'Sorry, your password was incorrect. Please double-check ' +
        'your password.'
      ]
      render :new
    end
  end

  def destroy
    logout
    redirect_to new_session_url
  end
end
