class Api::UsersController < ApplicationController
    wrap_parameters include: User.attribute_names + ['password']
    before_action :require_logged_out, only: [:create]
    # skip_before_action :verify_authenticity_token
    #skipped authenticity token for the time being because of 422 error

    def create
        @user = User.new(user_params)
        if @user.save
            render json: @user
        else
            render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private
    
    def user_params 
        params.require(:user).permit(:email, :password)
    end
end
