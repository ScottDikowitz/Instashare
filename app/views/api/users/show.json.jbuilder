# json.array! @posts, partial: 'api/users/post', as: :post
#
# json.array!.push(@user)

follow_status = current_user.is_following?(@user) ? "unfollow" : "follow"

json.extract! @user, :id, :username, :body
json.follow_status follow_status
json.profile_picture asset_path(@user.user_pic)
json.posts @posts.reverse, partial: 'api/users/post', as: :post
