# == Schema Information
#
# Table name: messages
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  chat_id    :integer
#  author_id  :integer
#
class Message < ApplicationRecord
    validates :body, :chat_id, presence: true

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :chat,
        primary_key: :id,
        foreign_key: :chat_id,
        class_name: :Chat
end
