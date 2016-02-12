class Api::TagsController < ApplicationController

  def create
    @tag = Tag.new(tag_params)
    if @tag.save

      render json: {}
    else
      render json: {}
    end

  end

  def show
    @tag = Tag.find_by(tag_name: params[:id])
    @posts = @tag.posts
    render :show
  end

  private
  def tag_params
    self.params.require(:tag).permit(:tag_name)
  end

end
