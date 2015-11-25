json.extract! @post, :id, :caption
json.image asset_path(@post.image.url)

if current_user.likes_post?(@post.id)
  json.liked "liked"
else
  json.liked "unliked"
end

if @post.location
  json.location @post.location.place
  json.locationId @post.location.id
end

elapsed = ((Time.now - @post.created_at.time) / 60).to_i
elapsed = elapsed >= 60 ? (elapsed / 60).to_s + "h" : elapsed.to_s + "m"
json.minutes_ago elapsed

json.comments @post.getComments
json.user do
  json.extract! @post.user, :id, :username

end
