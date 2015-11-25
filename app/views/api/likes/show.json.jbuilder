json.extract! @like, :id, :user_id, :post_id

json.numLikes @like.post.likes.count
