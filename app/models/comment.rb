class Comment < ApplicationRecord
  validates :body, :user_id, :post_id, presence: true

  # ==================================================
  # Associations
  # ==================================================
  belongs_to :post,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Comment
end
