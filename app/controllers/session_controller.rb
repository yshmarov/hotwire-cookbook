class SessionController < ApplicationController
    def new
        # Render the login form
    end

    def create
        user = Employee.find_by(email: params[:email])
        if user
            session[:user_id] = user.id
            redirect_to employees_path, notice: "Logged in successfully"
        else
            flash.now.alert = "Invalid email or password"
            render :new
        end
    end

    def destroy
        session[:user_id] = nil
        redirect_to root_path, notice: "Logged out successfully"
    end
end
