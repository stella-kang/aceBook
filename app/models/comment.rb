# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  author_id  :integer          not null
#  content    :text             not null
#  post_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Comment < ApplicationRecord
    validates :content, :author_id, :post_id, presence: true

    belongs_to :post,
        primary_key: :id,
        foreign_key: :post_id,
        class_name: :Post
    
    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User
        
    has_many :likes,
        as: :likeable
end
