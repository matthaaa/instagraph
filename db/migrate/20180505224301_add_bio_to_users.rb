class AddBioToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :bio, :string, null: false
  end
end
