@friend_requests.each do |request|
    json.set! request.id do
        json.extract! request, :friend_id, :user_id, :status, :id
    end
end

@received_requests.each do |request|
    json.set! request.id do
        json.extract! request, :friend_id, :user_id, :status, :id
    end
end