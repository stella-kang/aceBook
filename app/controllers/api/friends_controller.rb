class Api::FriendsController < ApplicationController
    def index
        @user = User.find(params[:user_id])
        @friend_requests = @user.friend_requests;
        @received_requests = @user.received_requests;
        # @friends = @user.friends.where(status: true);
        # @friends = []

        # @friend_requests.each do |request|
        #     @friends.push(User.find(request.friend_id));
        # end
        render :index
    end

    def create
        @friend = Friend.new(friend_params)

        if @friend.save
            render :show
        else
            render json: @friend.errors.full_messages, status: 422
        end
    end

    def update
        @friend = Friend.find(params[:id])

        if @friend.update(friend_params)
            render :show
        else
            render json: @friend.errors.full_messages, status: 422
        end
    end

    def destroy
        Friend.destroy(params[:id])
    end

    private
    def friend_params
        params.require(:friend).permit(:user_id, :friend_id, :status, :id)
    end

end