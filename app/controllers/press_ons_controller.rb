class PressOnsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        press_ons = PressOn.all
        render json: press_ons
    end

    def show
        press_on = PressOn.find(params[:id])
        render json: press_on
    end

    private

    # def camper_params
    #     params.require(:shopping_cart).permit(:name, :age)
    # end

    def render_not_found_response
        render json: {error: "Item not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
