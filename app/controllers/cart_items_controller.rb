class CartItemsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        cart_items = CartItem.all
        render json: cart_items
    end

    def create
        cart_item = CartItem.create!(cart_item_params)
        render json: cart_item
    end

    def update
        cart_item = CartItem.find(params[:id])
        cart_item.update!(cart_item_params)
        render json: cart_item
    end

    def destroy
        cart_item = CartItem.find(params[:id])
        cart_item.destroy
        head :no_content
    end

    

    private

    def cart_item_params
        params.require(:cart_item).permit(:shopping_cart_id, :in_cart_quantity, :item_id, :item_type)
    end

    def render_not_found_response
        render json: {error: "Shopping cart not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
