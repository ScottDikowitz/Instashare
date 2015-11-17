class Post < ActiveRecord::Base
  validates :caption, :user_id, :image, presence: true
  belongs_to :user

end
