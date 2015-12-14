json.extract! user, :id, :username, :body
json.pic asset_path(user.user_pic.url(:thumb))
