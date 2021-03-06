class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    @channel = Chat.find(params[:chat_id])
    stream_for @channel
  end

  def speak(data)
    @channel = Chat.find(data['chat_id'])
    message = Message.create(body: data['message'], author_id: data['author_id'], chat_id: data['chat_id'])

    if message.save 
      socket = { message: message }
      ChatChannel.broadcast_to(@channel, socket)
    end
  end
  
  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
