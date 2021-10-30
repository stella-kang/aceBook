class Api::NewsfeedsController < ApplicationController
    def show
        @posts = []
        # current_user.friends.each do |friend|
        #     user = User.find(friend.friend_id)
        #     @posts += user.posts
        # end
        current_user.posts.each do |post|
            @posts.push(post)
        end
        render :show
    end
end