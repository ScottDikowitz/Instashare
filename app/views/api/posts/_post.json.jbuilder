json.extract! post, :id, :caption

# @user_liked_posts

if @user_liked_posts.include?(post)
  json.liked "liked"
else
  json.liked "unliked"
end

json.numLikes post.likes.length

# json.numLikes 0

if post.location
  json.location post.location.place
  json.locationId post.location.id
end

json.image asset_path(post.image.url)
# json.created_at do
elapsed = ((Time.now - post.created_at.time) / 60).to_i
elapsed = elapsed >= 60 ? (elapsed / 60).to_s + "h" : elapsed.to_s + "m"
json.minutes_ago elapsed

# json.comments post.getComments

# json.comments
 # comments = post.comments
 # per = 15
 # page = ((comments.length - 1) / per) + 1

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
