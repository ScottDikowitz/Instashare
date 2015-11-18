class Api::PostsController < ApplicationController

  def index
    @posts = Post.all.reverse
    # render json: @posts.to_json
    render json: @posts.as_json(include: [:user])
  end

  def show
    @post = Post.find(params[:id])
    render json: @post
  end

end
