class Follow < ActiveRecord::Base
  validates :follower_id, :user_id, presence: true
  validates :user_id, uniqueness: { scope: :follower_id,
    message: "can only follow user once." }

  belongs_to(
    :author,
    class_name: "User",
    foreign_key: :follower_id
  )
end
