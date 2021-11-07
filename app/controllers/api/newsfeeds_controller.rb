class Api::NewsfeedsController < ApplicationController
    def show
        @posts = []
        @comments = []

        friend_requests = current_user.friend_requests.where(status: true).includes(:requestee)
    
        friend_requests.each do |request|
            @posts += request.requestee.posts
        end

        @posts += current_user.posts

        @posts.each do |post|
            @comments += post.comments
        end

        render :show
    end
end