class Follow < ActiveRecord::Base
  validates :follower_id, :user_id, presence: true
end
