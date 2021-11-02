class RemovePictureUrlColumnFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :picture_url
  end
end
