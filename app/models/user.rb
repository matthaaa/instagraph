class User < ApplicationRecord
  validates :username, :password_digest, :session_token, null: false
  validates :password, length: {minimium: 6}

  def password=(password)
    @password = BCrypt::Password.create(password)
  end
end
