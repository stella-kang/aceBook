# == Schema Information
#
# Table name: chats
#
#  id         :bigint           not null, primary key
#  user1_id   :integer          not null
#  user2_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Chat < ApplicationRecord
    validates :user1_id, :user2_id, presence: true

    has_many :messages,
        foreign_key: :chat_id,
        primary_key: :id,
        class_name: :Message
end
