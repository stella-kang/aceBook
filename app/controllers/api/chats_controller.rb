class Api::ChatsController < ApplicationController
    def index
        @chats = Chat.where("user1_id = ?", current_user.id).or(Chat.where("user2_id = ?", current_user.id))
        render :index if @chats 
    end

    def create
        @chat = Chat.new(chat_params)

        unless @chat.save
            render json: @chat.errors.full_messages, status: 422
        end 
    end

    private
    def chat_params
        params.require(:chat).permit(:user1_id, :user2_id)
    end
end