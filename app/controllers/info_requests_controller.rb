require 'httparty'

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

		description = ""

		json = JSON.parse @info_request.to_json
		json.delete "id"
		json.delete "updated_at"
		a = json.to_a
		a.each do |x|
			description += "#{x[0]}: #{x[1]}\n"
		end

		body = {
			"key" => "dd3759f01960017f7897f1abf800eb273a2b2e52",
			"issue" => {
				"project_id" => 1,
				"tracker_id" => 3,
				"status_id" => 1,
				"priority_id" => 2,
				"subject" => "Request from #{@info_request.institution}",
				"description" => description
			}
		}

		HTTParty.post("http://52.26.168.38/issues.json", body: body)

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
