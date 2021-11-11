class Api::LikesController < ApplicationController
    def index
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

    def destroy
        Like.destroy(params[:id])
    end

    private
    def like_params
        params.require(:like).permit(:author_id, :likeable_id, :likeable_type)
    end
end