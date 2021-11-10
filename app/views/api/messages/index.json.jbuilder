@messages.each do |message|
    json.set! message.id do
        json.extract! message, :body, :author_id, :chat_id, :id
    end
end