class Post < ActiveRecord::Base
  validates :caption, :user_id, presence: true
  belongs_to :user
  has_attached_file :image, default_url: "cat.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :comments

def getStuff
    self.comments.map do |comment|
      {
        username: comment.user.username,
        content: comment.content,
        id: comment.id
      }
    end
end
end
