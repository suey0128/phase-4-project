class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    
    def index
        users = User.all
        render json: users
    end

    def create
        user = User.create!(user_params)
        shopping_cart = ShoppingCart.create!(paid: false, first_name: "n/a", last_name:"n/a", shipping_address: "n/a", address: "n/a", city: "n/a", state: "na", zip: "00000", country: "n/a")
        current_cart = CurrentCart.create!(user_id: user.id, shopping_cart_id: shopping_cart.id)
        session[:user_id] = user.id
        render json: user
    end


    def show
        #when the user signup, the id is stored in session(cookie), find the user using cookie
        user = User.find_by(id: session[:user_id])
        # byebug #=> session[:user_id] nil 
        if user
            render json: user
        else
            render json: { error: "Not authorized"}, status: :unauthorized
        end
    end



    def update
        user = User.find(params[:id])
        user.update!(user_params)
        render json: user
    end
    private

    def user_params
        params.permit(:username, :first_name, :last_name, :password, :password_confirmation, :billing_address, :email, :birthday, :address, :city, :state, :zip, :country)
    end

    def render_not_found_response
        render json: {error: "User not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
