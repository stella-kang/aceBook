json.extract! @post, :content, :author_id, :profile_id, :id
json.photo url_for(@post.photo) if (@post.photo.attached?)
