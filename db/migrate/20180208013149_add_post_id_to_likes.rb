class AddPostIdToLikes < ActiveRecord::Migration[5.1]
  def change
    add_column :likes, :user_id, :integer, null: false
    add_column :likes, :post_id, :integer, null: false
  end
end
