json.extract! post, :id, :caption
json.image asset_path(post.image.url(:medium))
