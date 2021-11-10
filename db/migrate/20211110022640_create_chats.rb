class CreateChats < ActiveRecord::Migration[5.2]
  def change
    create_table :chats do |t|
      t.integer :user1_id, null: false
      t.integer :user2_id, null: false
      t.timestamps
    end

    add_index :chats, :user1_id
    add_index :chats, :user2_id
    add_index :chats, [:user1_id, :user2_id], unique: true

    add_column :messages, :chat_id, :integer
    add_index :messages, :chat_id
  end
end
