json.posts do
   @posts.each do |post|
    json.set! post.id do 
        json.extract! post, :content, :author_id, :profile_id, :id

        if (post.created_at + 1.day) > DateTime.now
            if (post.created_at.hour - DateTime.now.hour === 0)
                json.created_at "#{DateTime.now.min - post.created_at.min}m"
            else
                json.created_at "#{DateTime.now.hour - post.created_at.hour}h"
            end
        else 
            json.created_at post.created_at.strftime("%b %-d")
        end
       
        # json.comments post.comments.map { |comment| comment.id}
        json.photo url_for(post.photo) if (post.photo.attached?)
        end
    end
end

json.comments do
    @comments.each do |comment|
        json.set! comment.id do
            json.extract! comment, :content, :author_id, :post_id, :id
        end
    end    
end
