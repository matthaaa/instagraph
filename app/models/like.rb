class Like < ApplicationRecord
  validates :user_id, :post_id, presence: true
  validates_uniqueness_of :user_id, :scope => [:post_id]

  # ==================================================
  # Associations
  # ==================================================
  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :post,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Post
end
