# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  author_id  :integer          not null
#  content    :text             not null
#  profile_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Post < ApplicationRecord
    validates :author_id, :profile_id, :content, presence: true

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User
end
