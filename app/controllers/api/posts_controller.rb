class Api::PostsController < ApplicationController
    def create
        @post = Post.new(post_params)
        @post.profile_id = nil if @post.profile_id == 0 
        
        if @post.save
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def update
        @post = Post.find(params[:id])

        if @post.update(post_params)
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def destroy
        Post.destroy(params[:id])
    end

    private
    def post_params
        params.require(:post).permit(:content, :author_id, :post_id, :profile_id, :photo)
    end
end