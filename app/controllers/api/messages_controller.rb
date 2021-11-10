class Api::MessagesController < ApplicationController
    def index
        chat = Chat.find(params[:chat_id])

        @messages = chat.messages

        render :index
    end
end