json.posts do
   @posts.each do |post|
    json.set! post.id do 
        json.extract! post, :content, :author_id, :profile_id, :id
        json.photo url_for(post.photo) if (post.photo.attached?)
        end
    end
end

json.comments do
    @comments.each do |comment|
        json.set! comment.id do
            json.extract! comment, :content, :author_id, :post_id, :id, :parent_comment_id
        end
    end    
end
