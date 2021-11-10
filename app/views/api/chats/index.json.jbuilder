@chats.each do |chat|
    json.set! chat.id do
        json.extract! chat, :id, :user1_id, :user2_id
    end
end