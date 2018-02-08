class Posts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :description, null: false
      t.string :author_id, null: false
      t.string :img_url, null: false

      t.timestamps
    end

    add_index :posts, :author_id
  end
end
