class RemovePostIdFromLikes < ActiveRecord::Migration[5.1]
  def change
    remove_column :likes, :user_id, :string
    remove_column :likes, :post_id, :string
  end
end
