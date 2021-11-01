class UpdateColumnsForUsers < ActiveRecord::Migration[5.2]
  def change
    remove_index :users, :username
    rename_column :users, :username, :first_name
    add_column :users, :last_name, :string, null: false
  end
end
