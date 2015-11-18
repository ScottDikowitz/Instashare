class Api::PostsController < ApplicationController

  def index
    @posts = Post.includes(:user).all.reverse
    render :index
  end

  def show
    @post = Post.find(params[:id])
    render json: @post
  end

end
