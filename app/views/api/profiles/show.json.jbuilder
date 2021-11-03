@posts.each do |post_array|
    post = post_array[0]
    author = post_array[1]
    profile = post_array[2]

    json.set! post.id do 
        json.extract! post, :content, :author_id, :profile_id, :id
        json.author author
        json.profile profile
        json.photo url_for(post.photo) if (post.photo.attached?)
    end
end