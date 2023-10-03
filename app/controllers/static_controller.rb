class StaticController < ApplicationController
  def dashboard
    flash.now[:notice] = "Welcome to the dashboard!"
  end
end
