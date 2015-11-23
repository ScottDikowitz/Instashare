class Api::PostsController < ApplicationController

  def index
    if current_user
      @posts = (current_user.followed_users_posts.includes(:user).includes(:comments) + current_user
      .posts.includes(:user).includes(:comments)).sort_by!{
        |post| post.created_at}.reverse!
    else
      @posts = []
    end

    render :index
  end

  def create
    location = params[:location]
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    if @post.save
      @post.parse_tags
      render json: location
    end

  end

  def show
    @post = Post.find(params[:id])
    render "api/posts/show"
  end

  private
  def post_params
    self.params.require(:post).permit(:caption, :user_id, :image)
  end

end
