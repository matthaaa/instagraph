class Comment < ApplicationRecord
  validates :body, :user_id, :post_id, presence: true

  
end
