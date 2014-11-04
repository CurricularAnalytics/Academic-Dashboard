class ApplicationController < ActionController::Base

	before_filter :user_layout

	# Prevent CSRF attacks by raising an exception.
	# For APIs, you may want to use :null_session instead.
	protect_from_forgery with: :exception

private

	def user_layout
		if user_signed_in?
			'application'
		else
			'static'
		end
	end
end
