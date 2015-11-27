class Api::LocationsController < ApplicationController

  def create
    @location = Location.new({place: params[:location]})
    if @location.save
      ### dangerous! ?
      post = current_user.posts.last
      post.location_id = @location.id
      post.save
      # render "api/user/show"
      render json: { location: params[:location], locationId: @location.id }
    else
      ### dangerous! ?

      post = current_user.posts.last
      location_id = Location.find_by(place: @location.place).id
      post.location_id = location_id
      post.save
      render json: { location: params[:location], locationId: location_id }
    end

  end

  def index

  end

  def show
    render json: Location.find(params[:id]).as_json(only: [:id, :place])

  end

  def update
  end

  private
  def location_params
    self.params.require(:location).permit(:place)
  end

end
