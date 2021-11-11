Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'
  mount ActionCable.server, at: '/cable'
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update, :show, :index] do
      resource :profile, only: [:show]
      resources :friends, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resource :newsfeed, only: [:show]
    resources :posts, only: [:create, :update, :destroy]
    resources :comments, only: [:update, :destroy, :create]
    resources :friends, only: [:create, :destroy, :update]
    resources :likes, only: [:create, :destroy, :index]
    resources :chats, only: [:create, :index] do
      resources :messages, only: [:index]
    end
  end
end
