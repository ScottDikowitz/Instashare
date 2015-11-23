json.extract! @tag, :id, :tag_name

if @posts
  json.posts @posts.reverse, partial: 'api/users/post', as: :post
end
