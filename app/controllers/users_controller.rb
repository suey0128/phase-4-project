class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    
    def index
        users = User.all
        render json: users
    end

    def create
        user = User.create!(user_params)
        render json: user
    end

<<<<<<< HEAD
    def show 
        user =User.find_by(id: session[:user_id])
        if user
        render json: user
        else 
          render json: {error:"Not authorized"},status: :unauthorized
         end 
=======
    # def show
    #     #when the user signup, the id is stored in session(cookie), find the user using cookie
    #     user = User.find_by(id: session[:user_id])
    #     # byebug #=> session[:user_id] nil 
    #     if user
    #         render json: user
    #     else
    #         render json: { error: "Not authorized"}, status: :unauthorized
    #     end
    # end

    def show

        user = User.find(params[:id])
        render json: user
    end

    def update
        user = User.find(params[:id])
        user.update!(user_params)
        render json: user
>>>>>>> main
    end
    private

    def user_params
<<<<<<< HEAD
        params.require(:user).permit(:username,:first_name,:last_name,:password, :billing_address, :shipping_address, :email, :birthday)
=======
        params.require(:user).permit(:username, :first_name, :last_name, :password, :billing_address, :email, :birthday, :address, :city, :state, :zip, :country)
>>>>>>> main
    end

    def render_not_found_response
        render json: {error: "User not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
