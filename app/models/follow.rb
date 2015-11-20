class Follow < ActiveRecord::Base
  validates :follower_id, :user_id, presence: true

  belongs_to(
    :author,
    class_name: "User",
    foreign_key: :follower_id
  )
end
