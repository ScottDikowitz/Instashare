json.array! @posts, partial: 'api/users/post', as: :post

json.array!.push(@user)
