json.extract! @post, :content, :author_id, :profile_id, :id
json.photo url_for(@post.photo) if (@post.photo.attached?)
if (@post.created_at + 23.hour) > DateTime.now
    if (@post.created_at.hour - DateTime.now.hour === 0)
        json.created_at "#{DateTime.now.min - @post.created_at.min}m"
    else 
        json.created_at "#{(24 - post.created_at.hour) + DateTime.now.hour}h"
    end
else 
    json.created_at @post.created_at.strftime("%b %-d")
end