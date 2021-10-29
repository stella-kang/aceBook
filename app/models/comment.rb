# == Schema Information
#
# Table name: comments
#
#  id                :bigint           not null, primary key
#  author_id         :integer          not null
#  parent_comment_id :integer
#  content           :text             not null
#  post_id           :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class Comment < ApplicationRecord
end
