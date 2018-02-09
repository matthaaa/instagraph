class AddIndexToPosts < ActiveRecord::Migration[5.1]
  def change
    add_index :posts, :author_id
    add_index :comments, :post_id
    add_index :likes, :post_id
    add_index :follows, :follower_id
    add_index :follows, :followed_id
  end
end
