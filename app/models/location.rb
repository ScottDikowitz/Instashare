class Location < ActiveRecord::Base
  validates :place, presence: true, uniqueness: true

  has_many :posts
end
