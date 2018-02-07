class Comment < ApplicationRecord
  validates :body, :user_id, :post_id, presence: true

  # ==================================================
  # Associations
  # ==================================================
  belongs_to :post
  belongs_to :user
end
