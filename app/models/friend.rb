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
    validates :user_id, :friend_id, :status, presence: true

    belongs_to :user
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :friend_user,
        primary_key: :id,
        foriegn_key: :friend_id,
        class_name: :User
end
