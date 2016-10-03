json.extract! user, :id, :username, :body
json.pic asset_url(user.user_pic.url(:thumb))
json.following current_user.is_following?(user) ? true : false

# json.posts user.posts.limit(3)
# posts = user.posts.limit(3)

posts = user.posts.limit(3).map do |post|
    {id: post.id, url: asset_url(post.image.url(:medium))}
end

json.posts posts

# json.posts posts
