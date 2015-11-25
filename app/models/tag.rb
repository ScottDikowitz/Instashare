class Tag < ActiveRecord::Base
  validates :tag_name, presence: true, uniqueness: true
  has_many :taggings, dependent: :destroy
  has_many(
    :posts,
    through: :taggings,
    source: :post
  )

  include PgSearch
  multisearchable :against => :tag_name

end
