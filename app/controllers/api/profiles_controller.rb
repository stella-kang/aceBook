class Api::ProfilesController < ApplicationController
    def show
        @posts = Post.where(profile_id: params[:user_id]).or(Post.where("author_id = ? and profile_id IS NULL", params[:user_id])).includes(:comments)
        @comments = []

    
        @posts.each do |post|
            @comments += post.comments
        end

        render "/api/newsfeeds/show"
    end
end