class Api::FriendsController < ApplicationController
    def index
        @user = User.find(params[:user_id])
        @friend_requests = @user.friends;
        # @friends = []

        # @friend_requests.each do |request|
        #     @friends.push(User.find(request.friend_id));
        # end
        render :index
    end

    def create
        @friend = Friend.new(friend_params)

        unless @friend.save
            render json: @friend.errors.full_messages, status: 422
        end
    end

    def update
        @friend = Friend.find(params[:id])

        unless @friend.update(params[:friend][:status])
            render json: @friend.errors.full_messages, status: 422
        end
    end

    def delete
        Friend.destroy(params[:id])
    end

    private
    def friend_params
        params.require(:friend).permit(:user_id, :friend_id, :status)
    end

end