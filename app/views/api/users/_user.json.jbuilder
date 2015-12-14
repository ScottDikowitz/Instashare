json.extract! user, :id, :username
json.pic asset_path(user.user_pic.url(:thumb))
