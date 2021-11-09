@likes.each do |like|
    json.set! like.id do
        json.extract! like, :id, :author_id, :likeable_id, :likeable_type
    end
end