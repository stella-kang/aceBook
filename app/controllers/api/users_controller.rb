class Api::UsersController < ApplicationController
    def show
        @user = User.find(params[:id])
        render :show
    end
    
    def create
        @user = User.new(user_params)
        @user.profile_picture.attach(params[:user][:profile_picture])

        if @user.save && @user.profile_picture.attached?
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        @user = User.find(params[:id])
        @user.profile_picture.attach(io: params[:user][:profile_picture_file], filename: "user#{params[:id]}-profilepicture")

        if @user.update(user_params) && @user.profile_picture.attached?
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private
    def user_params
        params.require(:user).permit(:first_name, :last_name, :password, :email, :profile_picture_file, :profile_picture_url)
    end
end