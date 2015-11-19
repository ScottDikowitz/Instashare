class Comment < ActiveRecord::Base
  validates :content, :user_id, :post_id, presence: true
end
