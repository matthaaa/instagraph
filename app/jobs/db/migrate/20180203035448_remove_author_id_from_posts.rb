class RemoveAuthorIdFromPosts < ActiveRecord::Migration[5.1]
  def change
    remove_column :posts, :author_id, :string
  end
end
