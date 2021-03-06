class Api::UsersController < ApplicationController
    def index
        @users = User.all
        render :index
    end

    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        @user = User.find(params[:id])
        
        if @user.update(user_params)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private
    def user_params
        params.require(:user).permit(:first_name, :last_name, :password, :email, :profile_picture, :cover_photo)
    end
end