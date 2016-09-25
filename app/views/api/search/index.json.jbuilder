# @search_results

# json.total_count @search_results.total_count
json.results do
  json.array! @search_results.map(&:searchable) do |result|
    if result.class == User
      # json.partial! "api/users/user", user: result
      user_data = {id: result.id, username: result.username, body: result.body, profile_picture: asset_url(result.user_pic.url(:thumb))}
      json.user user_data
      json._type "User"
    elsif result.class == Location
      json.location result.as_json(only: [:id, :place])
      json._type "Location"
    elsif result.class == Tag
      json.tag result.as_json(only: [:id, :tag_name])
      json._type "Tag"
    end
  end
end
