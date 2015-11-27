class Api::PostsController < ApplicationController

  def index
    if current_user
      followed_user_ids = current_user.follows.map(&:follower_id)

      page_number = params[:pageNum] || 1
      # .includes(:user, :location, comments: :user)
      @posts = Post.where(user_id: (followed_user_ids.push(current_user.id)))
      .includes(:location, :user, :likes, comments: :user)
      .includes(:user_likes)
      .order(created_at: :desc).page(page_number)
      @user_liked_posts = current_user.liked_posts.to_a


      # @posts = (current_user.followed_users_posts.includes(:user, :location, comments: :user) +
      # current_user.posts.includes(:user, :location, comments: :user)).sort_by!{
      #   |post| post.created_at}.reverse!
    else
      @posts = []
    end

    render :index
  end

  def create
    @location = params[:location]
    @post = Post.new(post_params)
    @post.user_id = current_user.id

    if @post.save
      @post.parse_tags
      @user_liked_posts = current_user.liked_posts.to_a
      render "api/location/new"
    else
      render json: {}
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
