json.array! @posts, partial: 'api/users/post', as: :post

json.array!.push(@user)



# json.extract! @user, :id, :username, :body
# json.profile_picture asset_path(@user.user_pic)
# json.posts @user.posts.reverse, partial: 'api/users/post', as: :post
