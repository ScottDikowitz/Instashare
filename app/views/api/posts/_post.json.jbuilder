json.extract! post, :id, :caption

# @user_liked_posts

json.profile_picture asset_url(post.user.user_pic.url(:thumb))

if @user_liked_posts.include?(post)
  json.liked "liked"
else
  json.liked "unliked"
end

json.numLikes post.likes.length
json.userLikes post.user_likes.as_json(only: [:username, :id])
# json.numLikes 0

if post.location
  json.location post.location.place
  json.locationId post.location.id
end
json.image asset_url(post.image.url)
# json.created_at do
elapsed = ((Time.now - post.created_at.time) / 60).to_i
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

arr = post.comments.last(25).map do |comment|
    {
     username: comment.user.username,
     content: comment.content,
     id: comment.id
   }
  end
  json.comments arr

json.user do
  json.extract! post.user, :id, :username, :body
end
