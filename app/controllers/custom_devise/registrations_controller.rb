class CustomDevise::RegistrationsController < Devise::RegistrationsController
	layout 'static'
	

	def create

		# super
    build_resource(sign_up_params)
		if resource.save
      set_flash_message :notice, :signed_up
			@institution = Institution.new(institution_params)
			@institution.save!
    else
      clean_up_passwords(resource)
      render 'static/home', :anchor => "sign_up"
    end

	end

	
	def destroy
		super
	end


private
	def institution_params
		params.require(:institution).permit(:name, :code, :street, :address, :city, :zip, :phone)
	end
end