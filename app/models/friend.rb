# == Schema Information
#
# Table name: friends
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  friend_id  :integer          not null
#  status     :boolean          default(FALSE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Friend < ApplicationRecord
    validates :user_id, :friend_id, presence: true

    belongs_to :requestor,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :requestee,
        primary_key: :id,
        foreign_key: :friend_id,
        class_name: :User

end
