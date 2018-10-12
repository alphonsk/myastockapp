Rails.application.routes.draw do

  devise_for :users 
  resources :stocks  do
    collection {post :import }
    get "mystocks/destroy"
  end

  resources :posts

  root to: "stocks#index"
  get "/mystocks" => "stocks#mystocks"

  get "/stocks/mystocks" => "stocks#mystocks"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # before_action :authenticate_user! 
  # user_signed_in? 
  # current_user 
  # user_session

end
