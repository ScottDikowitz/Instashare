class User < ActiveRecord::Base
  validates :username, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  has_attached_file :user_pic, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "avatar.jpg"
  validates_attachment_content_type :user_pic, content_type: /\Aimage\/.*\Z/

  after_initialize :ensure_session_token
  attr_reader :password

  include PgSearch
  multisearchable :against => :username

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  has_many :posts, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :follows, dependent: :destroy
  has_many( :followed_users,
  through: :follows,
  source: :author
  )

  has_many( :user_comments,
  through: :posts,
  source: :comments
    )
  has_many(
    :liked_posts,
    through: :likes,
    source: :post
    )
  has_many(
    :followed_users_posts,
    through: :followed_users,
    source: :posts
  )

  has_many(
    :foreign_likes,
    through: :posts,
    source: :likes
  )

  has_many :likes, dependent: :destroy

  def followers
    Follow.where(follower_id: self.id).count
  end

  def self.find_or_create_by_auth_hash(auth_hash)
   provider = auth_hash[:provider]
   uid = auth_hash[:uid]

   user = User.find_by(provider: provider, uid: uid)
   return user if user

   User.create(
     username: auth_hash[:info][:name],
     provider: provider,
     uid: uid,
     password: SecureRandom.urlsafe_base64
   )
 end


  def likes_post?(post)
    post.user_likes.where("user_id = ?", self.id).length == 1
    # true
    # !post.user_likes.find_by(username: self.username).nil?
    # byebug
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def is_following?(user)
    self.followed_users.include?(user)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user
      if user.is_password?(password)
        return user

      end
    end
  end
end
