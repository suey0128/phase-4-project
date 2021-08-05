class CurrentCartsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        current_carts = CurrentCart.all
        render json: current_carts
    end

    def create
        current_cart = CurrentCart.create!(current_cart_params)
        render json: current_cart
    end

    def destroy
        current_cart = CurrentCart.find(params[:id])
        current_cart.destroy
        head :no_content
    end

    def current_cart_params
        params.require(:current_cart).permit(:user_id, :shopping_cart_id)
    end

    def render_not_found_response
        render json: {error: "Shopping cart not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

end
