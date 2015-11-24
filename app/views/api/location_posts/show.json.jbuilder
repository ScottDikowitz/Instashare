json.extract! @location, :id, :place

if @posts
  json.posts @posts.reverse, partial: 'api/users/post', as: :post
end
