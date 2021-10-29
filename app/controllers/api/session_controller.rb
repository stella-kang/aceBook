class Api::SessionController < ApplicationRecord
    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

        if @user
            login(@user)
            render '/index'
        else
            render json: ["Invalid login credentials"], status: 401
        end
    end

    def destroy
        @user = current_user

        if @user
            logout!
            render json: {}
        else
            render json: ["Must be logged in"], status: 404
        end
    end
end