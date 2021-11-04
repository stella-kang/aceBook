class Api::ProfilesController < ApplicationController
    def show
        posts = Post.where(profile_id: params[:id]).or(Post.where(author_id: params[:id]))
        @posts = []
        @comments = []

        posts.each do |post|
            @posts.push(post)

            post.comments.each do |comment|
                @comments.push(comment)
            end
        end

        render "/api/newsfeeds/show"
    end
end