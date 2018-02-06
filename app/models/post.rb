require 'action_view'
include ActionView::Helpers::DateHelper

class Post < ApplicationRecord
  validates :description, :author_id, :img_url, presence: true

  after_initialize :initialize_description,

  # ==================================================
  # Associations
  # ==================================================
  belongs_to :user,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  has_many :likes,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Like

  # ==================================================
  # Methods
  # ==================================================
  def initialize_description
    self.description ||= ""
  end

  def time_ago
    distance_of_time_in_words(self.created_at, Time.now)
  end
end
