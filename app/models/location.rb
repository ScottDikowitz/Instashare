class Location < ActiveRecord::Base
  validates :place, presence: true, uniqueness: true

  include PgSearch
  multisearchable :against => :place

  has_many :posts
end
