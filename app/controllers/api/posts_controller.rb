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
    @post = current_user.posts.find_by(id: params[:post_id])
    unless @post
      render json: 'Post Not Found!', status: 404
    end
    if @post.update_attributes(post_params)
      render :show
    else
      render json: @post.errors.full_messages
    end
  end

  def index
    @posts = Post.all
  end

  def show
    @post = Post.find_by(id: params[:post_id])
    if @post
      render :show
    else
      render json: 'Post not found!', status: 404
    end
  end

  def destroy
  end

  private
  def post_params
    params.require(:post).permit(
      :description, :author_id, :img_url
    )
  end
end
