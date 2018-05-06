class Api::UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 400
    end
  end

  def edit
  end

  def update
  end

  def index
    @users = User.all
  end

  def show
    @user = User.find_by(id: params[:id])
    if @user
      render :show
    else
      render json: 'User not found!', status: 404
    end
  end

  def destroy
  end

  private
  def user_params
    params.require(:user).permit(
      :username, :password, :full_name, :email, :img_url,
    )
  end
end
