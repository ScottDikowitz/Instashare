class SessionsController < ApplicationController
  def new

  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      sign_in(@user)
      redirect_to user_url(@user.id)
    else
      flash.now[:errors] = "Invalid credentials."
      render :new
    end
  end

  def destroy
    sign_out(@user)
  end
end
