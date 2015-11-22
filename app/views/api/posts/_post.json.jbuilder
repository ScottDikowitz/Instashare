json.extract! post, :id, :caption
json.image asset_path(post.image.url)
# json.created_at do
elapsed = ((Time.now - post.created_at.time) / 60).to_i
elapsed = elapsed >= 60 ? (elapsed / 60).to_s + "h" : elapsed.to_s + "m"
json.minutes_ago elapsed

json.comments post.getStuff

json.user do
  json.extract! post.user, :id, :username, :body
end
