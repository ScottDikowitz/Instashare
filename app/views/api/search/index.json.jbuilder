# @search_results

# json.total_count @search_results.total_count
json.results do
  json.array! @search_results.map(&:searchable) do |result|
    if result.class == User
      # json.partial! "api/users/user", user: result
      json.user result.as_json(only: [:id, :username, :body])
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
