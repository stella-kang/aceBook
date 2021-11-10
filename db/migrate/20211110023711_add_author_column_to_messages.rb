class AddAuthorColumnToMessages < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :author_id, :integer, null: false
    add_index :messages, :author_id

    remove_column :messages, :chat_id
    add_column :messages, :chat_id, :integer, null: false
    add_index :messages, :chat_id
  end
end
