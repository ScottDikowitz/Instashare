json.extract! post, :id, :image, :caption

# json.created_at do
json.minutes_ago ((Time.now - post.created_at.time) / 60).to_i
# end


json.user do
  json.extract! post.user, :id, :username, :body
end
