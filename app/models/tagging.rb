class Tagging < ActiveRecord::Base
  validates :post_id, :tag_id, presence: true
  validates :post_id, uniqueness: { scope: :tag_id,
    message: "can only create one tagging per tag per post." }
end
