class CartItemsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        cart_items = CartItem.all
        render json: cart_items
    end

    private

    # def camper_params
    #     params.require(:shopping_cart).permit(:name, :age)
    # end

    def render_not_found_response
        render json: {error: "Shopping cart not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
