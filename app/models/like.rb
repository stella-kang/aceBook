# == Schema Information
#
# Table name: likes
#
#  id            :bigint           not null, primary key
#  author_id     :integer          not null
#  likeable_type :string
#  likeable_id   :bigint
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Like < ApplicationRecord
    validates :author_id, :likeable_id, :likeable_type, presence: true
    belongs_to :likeable,
        polymorphic: :true
end
