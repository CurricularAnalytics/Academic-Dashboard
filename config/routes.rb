Rails.application.routes.draw do
	root 'static#home'

	resources :institutions

	devise_for :users, :controllers => {:registrations => 'custom_devise/registrations'}
end
