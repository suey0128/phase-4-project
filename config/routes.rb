Rails.application.routes.draw do
  
  resources :users
  resources :payments
  resources :shopping_carts
  resources :cart_items
  resources :hand_cares
  resources :glues
  resources :press_ons
  resources :current_carts

  post '/login/' => 'sessions#create'
  delete '/logout/' => 'sessions#destroy'
  get '/me/' => 'users#show'
   
  
  get '/press_ons/best_selling' => 'press_ons#best_selling'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
