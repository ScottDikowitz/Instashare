json.extract! @post, :id, :caption
json.image asset_url(@post.image.url)

json.profile_picture asset_url(@post.user.user_pic.url(:thumb))

json.numLikes @post.likes.count

json.userLikes @post.user_likes.as_json(only: [:username, :id])

if current_user.likes_post?(@post)
  json.liked "liked"
else
  json.liked "unliked"
end

if @post.location
  json.location @post.location.place
  json.locationId @post.location.id
end

elapsed = ((Time.now - @post.created_at.time) / 60).to_i
if elapsed >= 60
  if (elapsed / 60) >= 24
    elapsed = ((elapsed / 60) / 24).to_s + "d"
  else
    elapsed = (elapsed / 60).to_s + "h"
  end
else
    elapsed = elapsed.to_s + "m"
end
json.minutes_ago elapsed

# json.comments @post.getComments

arr = @post.comments.includes(:user).last(25).map do |comment|
    hello = {
     username: comment.user.username,
     content: comment.content,
     id: comment.id
   }
  end
json.comments arr

json.user do
  json.extract! @post.user, :id, :username

end
