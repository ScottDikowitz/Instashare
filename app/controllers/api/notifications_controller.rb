class Api::NotificationsController < ApplicationController

  def index
    stuff = current_user.user_comments.where("comments.created_at > ?", current_user.notify_last)
    render json: {}

  end


end
