class Api::NewsfeedController < ApplicationController
    def show
        @posts = []
        current_user.friends.each do |friend|
            user = User.find(friend.friend_id)
            @posts.push(user)
        end
        render :show
    end
end