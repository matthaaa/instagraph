class Api::PostsController < ApplicationController
  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 400
    end
  end

  def edit
  end

  def update
  end

  def index
    @posts = Post.all
  end

  def show
  end

  def destroy
  end

  private
  def post_params
    params.require(:post).permit(
      :description, :author_id, :img_url,
    )
  end
end
