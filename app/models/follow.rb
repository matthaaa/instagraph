class Follow < ApplicationRecord
  validates :follower_id :followed_id, presence: true

  # User who is following
  belongs_to :follower,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: :User

  # User who is being followed
  belongs_to :followee,
    primary_key: :id,
    foreign_key: :followed_id,
    class_name: :User
end
