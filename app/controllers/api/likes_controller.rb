class Api::LikesController < ApplicationController
    def index
        # if params[:comment_id]
        #     @likes = Like.where(likeable_id: params[:comment_id])
        # elsif params[:post_id]
        #     @likes = Like.where(likeable_id: params[:post_id])
        # end
        @likes = Like.all
        render :index
    end

    def create
        @like = Like.new(like_params)

        if @like.save
            render :show
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def delete
        Like.destroy(params[:id])
    end

    private
    def like_params
        params.require(:like).permit(:author_id, :likeable_id, :likeable_type)
    end
end