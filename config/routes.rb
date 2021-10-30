Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update, :show]
    resource :session, only: [:create, :destroy]
    resource :newsfeed, only: [:show]
    resources :posts, only: [:create, :update, :destroy, :show] do
      resources :comments, only: [:create]
    end
    resources :comments, only: [:update, :destroy]
    resources :friends, only: [:create, :destroy]
  end
end
