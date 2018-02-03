class Post < ApplicationRecord
  validates :description, :author_id, :img_url, presence: true

  after_initialize :initialize_description

  belongs_to :user,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  def initialize_description
    self.description ||= ""
  end
end
