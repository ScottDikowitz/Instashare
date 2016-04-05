json.extract! user, :id, :username, :body
json.pic asset_url(user.user_pic.url(:thumb))
