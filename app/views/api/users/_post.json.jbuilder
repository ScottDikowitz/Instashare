json.extract! post, :id, :caption
json.numLikes post.likes.length
json.numComments post.comments.length
json.image asset_path(post.image.url(:medium))
