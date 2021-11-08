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
    validates :author_id, :content, presence: true
    validates :profile_id, presence: true, allow_nil: true

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    has_one_attached :photo

    has_many :comments,
        primary_key: :id,
        foreign_key: :post_id,
        class_name: :Comment
end
