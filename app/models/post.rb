class Post < ActiveRecord::Base
  validates :caption, :user_id, presence: true
  belongs_to :user
  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "cat.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :comments, dependent: :destroy
  has_many :taggings, dependent: :destroy
  has_many(
    :tags,
    through: :taggings,
    source: :tag
    )
  belongs_to :location

  has_many :likes, dependent: :destroy

  has_many(
    :user_likes,
    through: :likes,
    source: :user
  )

  def parse_tags
    tags = []
    self.caption.split.each do |word|
      if word[0] == '#'
        tags << word
      end
    end

    tags.each do |tag|
      # check if exists?
      this_tag = Tag.create(tag_name: tag[1..-1])
      Tagging.create(post_id: self.id, tag_id: Tag.find_by(tag_name: tag[1..-1]).id)
    end


  end

  def getComments
      self.comments.map do |comment|
        {
          username: comment.user.username,
          content: comment.content,
          id: comment.id
        }
      end
  end

  def self.cutComment(comment)
    {
      username: comment.user.username,
      content: comment.content,
      id: comment.id,
      post_id: comment.post_id
    }
  end
end
