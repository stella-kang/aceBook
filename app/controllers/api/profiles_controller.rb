class Api::ProfilesController < ApplicationController
    def show
        posts = Post.where(profile_id: params[:id]).or(Post.where(author_id: params[:id]))
        @posts = []

        posts.each do |post|
            author = User.find_by(id: post.author_id)
            profile = User.find_by(id: post.profile_id)
            @posts.push([post, author, profile])
        end

        render :show
    end
end