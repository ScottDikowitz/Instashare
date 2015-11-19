class Api::PostsController < ApplicationController

  def index
    @posts = Post.includes(:user).all.reverse
    render :index
  end

  def create
    @post = Post.new(post_params)
    # byebug
    if @post.save
      render json: @post.to_json
    end

  end

  def show
    @post = Post.find(params[:id])
    render json: @post
  end

  private
  def post_params
    self.params.require(:post).permit(:caption, :user_id, :image)
  end

end
