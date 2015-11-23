class Api::TagsController < ApplicationController

  def create
    @tag = Tag.new(tag_params)
    if @tag.save
      # render "api/user/show"
      render json: {}
    else
      render json: {}
    end

  end

  def index
    # @users = User.all
    # render json: @users.as_json(only: [:id, :username])
  end

  def show
    # byebug
    @tag = Tag.find_by(tag_name: params[:id])
    @posts = @tag.posts
    render :show
  end

  def update
    # @user = current_user
    # if @user.update_attribute(:user_pic, params[:user][:user_pic])
    #   render json: @user
    # end

  end

  private
  def tag_params
    self.params.require(:tag).permit(:tag_name)
  end

end
