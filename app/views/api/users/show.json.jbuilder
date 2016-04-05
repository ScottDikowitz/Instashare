# json.array! @posts, partial: 'api/users/post', as: :post
#
# json.array!.push(@user)

json.extract! @user, :id, :username, :body
follow_status = current_user.is_following?(@user) ? "unfollow" : "follow"

if @posts
    json.numPosts @user.posts.length
    json.numFollowing @user.followed_users.length
    json.numFollowers @user.followers
    json.follow_status follow_status
    json.profile_picture asset_url(@user.user_pic.url(:thumb))
    json.posts @posts.reverse, partial: 'api/users/post', as: :post
end
