require 'action_view'
include ActionView::Helpers::DateHelper

class Post < ApplicationRecord
  validates :description, :author_id, :img_url, presence: true

  after_initialize :initialize_description, :initialize_likes

  attr_reader :likes_count, :likes_count_text

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

  def initialize_likes
    self.likes ||= []
  end

  def time_ago
    distance_of_time_in_words(self.created_at, Time.now)
  end

  def likes_count
     @likes_count = self.likes.length
     @likes_count
  end

  def likes_count_text
    if @likes_count == 1
      @likes_count_text = "like"
    else
      @likes_count_text = "likes"
    end

    return @likes_count.to_s + " " + @likes_count_text
  end
end
