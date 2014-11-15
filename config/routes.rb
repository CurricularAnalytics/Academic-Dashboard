Rails.application.routes.draw do
	root 'static#home'
	get '/services' => 'static#services'

	resources :institutions

	devise_for :users, :controllers => {:registrations => 'custom_devise/registrations'} 


  # get 'signin' => 'devise/sessions#new', :as => :new_user_session
  # post 'signin' => 'devise/sessions#create', :as => :user_session
  # match 'signout' => 'devise/sessions#destroy', :as => :destroy_user_session,
  #   :via => Devise.mappings[:user].sign_out_via
  
end
