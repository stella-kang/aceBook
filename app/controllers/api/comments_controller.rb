class Api::CommentsController < ApplicationController
    def create
        @comment = Comment.new(comment_params)

        unless @comment.save
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def update
        @comment = Comment.find(params[:id])

        unless @comment.update(comment_params)
            render json: @comment.errors.full_messages, status: 422
        end 
    end

    def destroy
        Comment.destroy(params[:id])
    end

    private
    def comment_params
        params.require(:comment).permit(:content, :author_id, :post_id, :parent_comment_id)
    end
end