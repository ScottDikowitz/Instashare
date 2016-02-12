class Api::LocationsController < ApplicationController

  def index

  end

  def show
    @location = Location.find(params[:id])
    url = HTTParty.get("https://maps.googleapis.com/maps/api/geocode/json?address=#{URI.escape(@location.place)}&key=#{ENV['GEOCODE_API_KEY']}",
    :headers => { 'ContentType' => 'application/json' } )
    response = JSON.parse(url.body)
    render json: response["results"][0]
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
