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
    location_name = params[:location]
    @post = Post.new(post_params)
    @post.user_id = current_user.id

    if @post.save
      @post.parse_tags
      @user_liked_posts = current_user.liked_posts.to_a

      if location_name.length >= 3
        url = HTTParty.get("https://maps.googleapis.com/maps/api/geocode/json?address=#{location_name}&key=#{ENV['GEOCODE_API_KEY']}",
        :headers => { 'ContentType' => 'application/json' } )
        response = JSON.parse(url.body)

        @location = Location.new({place: location_name})
        if @location.save
          @post.location_id = @location.id
          @post.save
        else

          @location = Location.find_by(place: location_name)
          @post.location_id = @location.id
          @post.save
        end
      end

      render "api/location/new", :status => 200
    else
      render json: {}
    end

  end

  def show
    @post = Post.find(params[:id])
    render "api/posts/show"
  end

  def destroy
    if current_user.id == 1
      @post = Post.find(params[:id])
      @post.destroy
    end
    render json: {}
  end

  private
  def post_params
    self.params.require(:post).permit(:caption, :user_id, :image)
  end

end
