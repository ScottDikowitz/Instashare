class UsersController < ApplicationController
  def new
  end

  def show

  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  private
  def user_params
    self.params.require(:user).permit(:username, :password, :body)
  end
end
