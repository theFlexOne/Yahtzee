Rails.application.routes.draw do
  resources :games
  resources :users, only: [:create, :show]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/auth", to: "users#show"
end
