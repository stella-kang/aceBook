json.set! @post.id do
    json.extract! @post, :content, :author_id, :profile_id, :created_at, :updated_at
end