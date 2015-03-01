class HomeController < ApplicationController
	http_basic_authenticate_with name: "admin", password: "password"

  	def index
  	end
end
