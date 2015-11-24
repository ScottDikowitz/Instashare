class Api::LocationPostsController < ApplicationController


  def show

    @location = Location.find(params[:id])
    @posts = @location.posts


    render :show

  end

  private
  def location_params
    self.params.require(:location).permit(:place)
  end

end
