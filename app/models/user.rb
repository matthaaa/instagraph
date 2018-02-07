class User < ApplicationRecord
  validates :username, :email, :full_name, presence: true
  validates :password_digest, :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}

  after_initialize :ensure_token, :initialize_img_url, :full_name

  attr_reader :password

  # ==================================================
  # Associations
  # ==================================================
  has_many :posts,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Post

  has_many :comments,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Comment

  has_many :likes,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Like

  # ==================================================
  # Methods
  # ==================================================
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def self.find_by_creds(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.valid_password?(password)
    user
  end

  def liked_posts
    @liked_posts = Hash.new

    p likes
    self.likes.each do |like|
      @liked_posts[like.post_id] = Post.find_by(id: like.post_id)
    end

    @liked_posts
  end

  private
  def ensure_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def initialize_name
    self.full_name ||= ""
  end

  def initialize_img_url
    self.img_url ||= ""
  end
end
