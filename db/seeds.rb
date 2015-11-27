# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)



(1..155).each do |idx|
  Post.create({caption: "#{["scott", "brian", "michael", "sennacy", "sam", "peter", "kyle"].sample} hello world#{idx}", user_id: [1,2,3,4,5,6].sample})
end
