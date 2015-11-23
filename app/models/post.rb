class Post < ActiveRecord::Base
  validates :caption, :user_id, presence: true
  belongs_to :user
  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "cat.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :comments, dependent: :destroy

  def parse_tags
    tags = []
    self.caption.split.each do |word|
      if word[0] == '#'
        tags << word
      end
      byebug
    end

    tags
  end

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
