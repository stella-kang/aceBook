class Api::NewsfeedsController < ApplicationController
    def show
        @posts = []
        @comments = []

        friend_requests = current_user.friend_requests.where(status: true).includes(requestee: { posts: [ :comments ]})
    
        friend_requests.each do |request|
            # @posts += request.requestee.posts.where('id > ? and id < ? ', params[:num1], params[:num2]).order(created_at: :asc)
            # @posts += request.requestee.posts.order(created_at: :asc)
            @posts += request.requestee.posts
            request.requestee.posts.each do |post|
                @comments += post.comments
            end
        end

        # @posts += current_user.posts.where('id > ? and id < ? ', params[:num1], params[:num2]).order(created_at: :asc)
        # @posts += current_user.posts.order(created_at: :asc)
        posts = current_user.posts.includes(:comments).order(created_at: :asc)

        @posts += posts

        posts.each do |post|
            @comments += post.comments
        end

        # @posts.each do |post|
        #     # @comments += post.comments.order(created_at: :asc)
        #     @comments += post.comments
        # end

        render :show
    end

    # private
    # def newsfeed_params
    #     params.permit(:num1, :num2)
    # end
end