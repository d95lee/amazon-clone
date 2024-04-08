class Api::CartItemsController < ApplicationController
    # before_action :require_logged_in
    # skip_before_action :require_logged_in
    # skip_before_action :verify_authenticity_token

    def index
        @cart_items = CartItem.all
        render :index
    end

    def show
        @cart_item = CartItem.find(params[:id])
        if @cart_item
            render :show
        else
            render json: @cart_item.errors.full_messages, status: 422
        end
    end

    def create
        @cart_item = CartItem.new(cart_items_params)
        if @cart_item.save
            render json: @cart_item, status: :ok
        else
            render json: @cart_item.errors.full_messages, status: 422
        end
    end

    def update
        @cart_item = CartItem.find(params[:id])
        if @cart_item.update(cart_items_params)
            render json: @cart_item, status: :ok
        else
            render json: { errors: @cart_item.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        @cart_item = CartItem.find(params[:id])
        if @cart_item.destroy
            head :no_content
        else
            render json: { errors: @cart_item.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def cart_items_params
        params.require(:cart_item).permit(:quantity, :user_id, :product_id)
    end
end
