class Api::SessionsController < ApplicationController

  def show

    unless current_user
      render json: {}
      return
    end

    @user = current_user
    render "api/users/show"
  end

  def create

    if params[:username] == "Guest"
      @user = User.find_by(username: "Guest")
      if @user
        sign_in(@user)
        render "api/user/show"
        return
      else
        @user = User.create(username: "Guest", password: "123456")
        sign_in(@user)
        render "api/user/show"
        return
      end
    end

    @user = User.find_by_credentials(
      params[:username],
      params[:password]
    )

    if @user.nil?
      render json: {errors: "Invalid credentials."}, status: 401
    else
      sign_in(@user)
      render "api/user/show"
    end
  end

  def destroy
    sign_out
    render json: {}
  end


end
