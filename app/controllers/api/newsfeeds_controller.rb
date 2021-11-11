class Api::NewsfeedsController < ApplicationController
    def show
        @posts = []
        @comments = []

        friend_requests = current_user.friend_requests.where(status: true).includes(requestee: { posts: [ :comments ]})
    
        friend_requests.each do |request|
            @posts += request.requestee.posts
            request.requestee.posts.each do |post|
                @comments += post.comments
            end
        end

        posts = current_user.posts.includes(:comments).order(created_at: :asc)

        @posts += posts

        posts.each do |post|
            @comments += post.comments
        end

        render :show
    end
end