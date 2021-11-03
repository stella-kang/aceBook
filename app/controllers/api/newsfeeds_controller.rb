class Api::NewsfeedsController < ApplicationController
    def show
        @posts = []
        # current_user.friends.each do |friend|
        #     user = User.find(friend.friend_id)
        #     @posts += user.posts
        # end
        current_user.posts.each do |post|
            # author = User.find_by(id: post.author_id)
            # profile = User.find_by(id: post.profile_id)

            # if profile
            #     @posts.push([post, author, profile])
            # else
            #     @posts.push([post, author, nil])
            # end

            @posts.push(post)
        end
        render :show
    end
end