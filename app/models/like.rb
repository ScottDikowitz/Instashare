class Like < ActiveRecord::Base
  validates :user_id, :post_id, presence: true
  validates :user_id, uniqueness: { scope: :post_id,
    message: "can only like one time." }
    
end
