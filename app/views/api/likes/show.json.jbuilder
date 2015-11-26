json.extract! @like, :id, :user_id, :post_id
post = @like.post
json.userLikes post.user_likes.as_json(only: [:id, :username])
json.numLikes post.likes.length
