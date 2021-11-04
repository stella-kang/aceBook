class Api::NewsfeedsController < ApplicationController
    def show
        @posts = []
        @comments = []
        # current_user.friends.each do |friend|
        #     user = User.find(friend.friend_id)
        #     @posts += user.posts
        # end
        current_user.posts.each do |post|
            @posts.push(post)

            post.comments.each do |comment|
                @comments.push(comment)
            end
        end
        render :show
    end
end