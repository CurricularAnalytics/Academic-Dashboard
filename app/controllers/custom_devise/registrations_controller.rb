class CustomDevise::RegistrationsController < Devise::RegistrationsController
	layout 'static'
	

	def create

		super

		if resource.save
			@institution = Institution.new(institution_params)
			@institution.save!
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