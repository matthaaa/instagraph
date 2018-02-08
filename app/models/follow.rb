class Follow < ApplicationRecord
  validates :follower_id :followed_id, presence: true

  # User who is following
  belongs_to :user,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: :Follow

  # Users who are being followed by follower_id user
  has_many :users,
    primary_key: :id,
    foreign_key: :followed_id,
    class_name: :Follow
end
