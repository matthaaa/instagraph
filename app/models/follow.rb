class Follow < ApplicationRecord
  validates :follower_id :followed_id, presence: true
end
