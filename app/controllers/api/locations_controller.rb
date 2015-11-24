class Api::LocationsController < ApplicationController

  def create
    @location = Location.new({place: params[:location]})
    if @location.save
      ### dangerous! ?
      post = current_user.posts.last
      post.location_id = @location.id
      post.save
      # render "api/user/show"
      render json: {}
    else
      ### dangerous! ?

      post = current_user.posts.last
      post.location_id = Location.find_by(place: @location.place).id
      post.save
      render json: {}
    end

  end

  def index
    # @users = User.all
    # render json: @users.as_json(only: [:id, :username])
  end

  def show
    render json: Location.find(params[:id]).as_json(only: [:id, :place])
    # byebug
    # @tag = Tag.find_by(tag_name: params[:id])
    # @posts = @tag.posts
    # render :show
  end

  def update
    # @user = current_user
    # if @user.update_attribute(:user_pic, params[:user][:user_pic])
    #   render json: @user
    # end

  end

  private
  def location_params
    self.params.require(:location).permit(:place)
  end

end
