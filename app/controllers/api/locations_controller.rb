class Api::LocationsController < ApplicationController

  def index

  end

  def show
    render json: Location.find(params[:id]).as_json(only: [:id, :place])

  end

  def posts

    @location = Location.find(params[:id])
    @posts = @location.posts


    render "api/location_posts/show"

  end

  def update
  end

  private
  def location_params
    self.params.require(:location).permit(:place)
  end

end
