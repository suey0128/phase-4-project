class SessionsController < ApplicationController
  
    def create
        #when a user login with username and pd, authenticate the info and find the id, 
        user = User.find_by(username: params[:user][:username])
        if user&.authenticate(params[:user][:password])
            session[:user_id] = user.id
            render json: user
        else
            render json: { errors: ["Incorrect username and/or password"] }, status: :unauthorized
        end
        # byebug #=> session[:user_id] = 1 , created
    end

    def destroy
        session.delete :user_id
        head :no_content
    end 


end
