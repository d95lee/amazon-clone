class Api::SessionsController < ApplicationController
    before_action :require_logged_in, only: [:destroy]
    before_action :require_logged_out, only: [:create]

    def show
        @user = current_user
        if @user 
            render 'api/users/show'
        else
            render json: { user: nil }
        end
    end

    def create
        email = params[:email]
        password = params[:password]
        @user = User.find_by_credentials(email, password)
        if @user
            login(@user)
            # debugger
            render 'api/users/show'
        else
            render json: { errors: ['The provided credentials were invalid']}, status: :unauthorized
        end
    end

    def destroy
        log_out!
        head :no_content
    end
end
