class User < ActiveRecord::Base
  validates :username, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  has_attached_file :user_pic, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "cat.jpg"
  validates_attachment_content_type :user_pic, content_type: /\Aimage\/.*\Z/

  after_initialize :ensure_session_token
  attr_reader :password

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  has_many :posts
  has_many :comments
  has_many :follows
  has_many( :followed_users,
  through: :follows,
  source: :author
  )

  has_many(
    :followed_users_posts,
    through: :followed_users,
    source: :posts
  )

  def ensure_session_token
    self.session_token = User.generate_session_token
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
