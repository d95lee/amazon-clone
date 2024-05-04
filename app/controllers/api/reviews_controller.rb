class Api::ReviewsController < ApplicationController
    before_action :require_logged_in, only: [:create, :update, :destroy]
    wrap_parameters include: Review.attribute_names + ['userId', 'productId']

    def index
        @reviews = Review.all
        render :index
    end

    def show
        @review = Review.find(params[:id])
        if @review
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def create
        @review = Review.new(review_params)
        if @review.save
            render json: @review, status: :ok
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = Review.find(params[:id])
        if @review.update(review_params)
            render json: @review, status: :ok
        else
            render json: @review.error.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find(params[:id])
        if @review.destroy
            head :no_content
        else
            render json: { errors: @review.error.full_messages }, status: :unprocessable_entity
        end    
    end

    private

    def review_params
        params.require(:review).permit(:owner, :title, :rating, :body, :username, :user_id, :product_id)
    end
end
