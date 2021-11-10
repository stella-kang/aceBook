json.extract! @comment, :content, :author_id, :post_id, :id

if (@comment.created_at + 1.day) > DateTime.now
    if (@comment.created_at.hour - DateTime.now.hour === 0)
        json.created_at "#{DateTime.now.min - @comment.created_at.min}m"
    else
        json.created_at "#{(24 - @comment.created_at.hour) + DateTime.now.hour}h"
    end
else 
    json.created_at @comment.created_at.strftime("%b %-d")
end