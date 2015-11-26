json.post_id @post_id

json.comments do
  json.array! @comments do |comment|
    json.id comment.id
    json.content comment.content
    json.username comment.user.username
  end
end
