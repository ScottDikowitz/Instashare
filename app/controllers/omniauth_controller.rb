class OmniauthController < ApplicationController


  def facebook
    @user = User.find_or_create_by_auth_hash(request.env['omniauth.auth'])
    byebug
    sign_in(@user)
    redirect_to root_url + "#/feed"
  end

end
