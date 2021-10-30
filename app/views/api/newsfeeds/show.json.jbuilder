@posts.each do |post|
    json.set! post.id do 
        json.extract! post, :content, :author_id, :profile_id, :id
    end
end