class Api::NewsfeedsController < ApplicationController
    def show
        @posts = []
        @comments = []

        current_user.friends.each do |friend|
            user = User.find(friend.friend_id)
            @posts += user.posts
        end

        @posts += current_user.posts

        @posts.each do |post|
            @comments += post.comments
        end

        render :show
    end
end