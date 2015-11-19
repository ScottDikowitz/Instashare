json.extract! post, :id, :caption
json.image asset_path(post.image.url)
# json.created_at do
elapsed = ((Time.now - post.created_at.time) / 60).to_i
elapsed = elapsed >= 60 ? (elapsed / 60).to_s + "h" : elapsed.to_s + "m"
json.minutes_ago elapsed
# end
# byebug
# json.comments do
#   post.comments.each do |comment|
#     json.comment do
#         # byebug
#         json.extract! comment, :content
#         json.username comment.user.username
#
#     end
#   end
# end
# json.comments post.comments, :content
json.comments post.getStuff

# json.extract! post.comments, :content
#
# json.post.comments.user post.user.username

json.user do
  json.extract! post.user, :id, :username, :body
end
