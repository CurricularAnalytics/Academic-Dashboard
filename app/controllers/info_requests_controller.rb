class InfoRequestsController < ApplicationController
	before_action :set_info_request, only: [:show, :edit, :update, :destroy]

	respond_to :html, :js

	def index
		@info_requests = InfoRequest.all
		respond_with(@info_requests)
	end

	def show
		respond_with(@info_request)
	end

	def new
		@info_request = InfoRequest.new
		respond_with(@info_request)
	end

	def edit
	end

	def create
		@info_request = InfoRequest.new(info_request_params)
		@info_request.save
		respond_with(@info_request)
	end

	def update
		@info_request.update(info_request_params)
		respond_with(@info_request)
	end

	def destroy
		@info_request.destroy
		respond_with(@info_request)
	end

	private
		def set_info_request
			@info_request = InfoRequest.find(params[:id])
		end

		def info_request_params
			params.require(:info_request).permit(:name, :email, :institution, :title, :phone, :comments, :sankey, :degree_mapping, :analytic_dashboards, :datamart, :custom_dashboards)
		end
end
