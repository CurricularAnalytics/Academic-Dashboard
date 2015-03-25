class CustomDevise::RegistrationsController < Devise::RegistrationsController
	layout 'static'
	

	def create
		# super
		# @success = false
		params = sign_up_params
		params[:password] = User::TEMPP
		params[:password_confirmation] = User::TEMPP

		@user = User.new(params)

		i = Interest.new(interest_params)

		puts "#{i.degree_mapping}"

		@user.interest = i

    		# r = build_resource(params)

    		# r.interest.new params[:interests]

    		# stop

		if @user.save
     			set_flash_message :notice, :signed_up
			@institution = Institution.new(institution_params)
			@institution.save!
			@success = true
   		 else
			clean_up_passwords(resource)
			#render 'static/home', :anchor => "sign_up"
    		end
	end

	
	def destroy
		super
	end


private
	def sign_up_params
		params.require(:user).permit(:name, :phone, :email, :title, :password, :password_confirmation)
	end

	def institution_params
		params.require(:institution).permit(:name, :code, :street, :address, :city, :zip, :phone)
	end

	def interest_params
		params.require(:interest).permit(:sankey, :degree_mapping, :analytic_dashboards, :datamart, :custom_dashboards)
	end
end