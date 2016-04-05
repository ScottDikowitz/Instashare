json.extract! post, :id, :caption
json.numLikes post.likes.length
json.numComments post.comments.length
json.image asset_url(post.image.url(:medium))
