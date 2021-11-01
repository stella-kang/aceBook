class Api::PostsController < ApplicationController
    def show
        @post = Post.find(params[:id])
        render :show
    end

    def create
        @post = Post.new(post_params)

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
        params.require(:post).permit(:content, :author_id, :post_id)
    end
end