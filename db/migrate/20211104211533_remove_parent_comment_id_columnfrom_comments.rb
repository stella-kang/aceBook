class RemoveParentCommentIdColumnfromComments < ActiveRecord::Migration[5.2]
  def change
    remove_column :comments, :parent_comment_id
  end
end
