class ShoppingCartsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        shopping_carts = ShoppingCart.all.order(updated_at: :asc)
        render json: shopping_carts
    end

    def show
        shopping_cart = ShoppingCart.find(params[:id])
        render json: shopping_cart
    end

    def update
        shopping_cart = ShoppingCart.find(params[:id])
        shopping_cart.update!(shopping_cart_params)
        render json: shopping_cart
    end

    def create
        shopping_cart = ShoppingCart.create!(shopping_cart_params)
        render json: shopping_cart
    end

    private

    def shopping_cart_params
        params.require(:shopping_cart).permit(:paid, :first_name, :last_name, :address, :city, :state, :zip, :country)
    end

    def render_not_found_response
        render json: {error: "Shopping cart not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
