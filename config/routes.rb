Rails.application.routes.draw do
  namespace :api do
    get 'follows/create'
  end

  namespace :api do
    get 'follows/destroy'
  end

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users
    resources :comments, only: [:index, :create, :destroy]
    resources :posts do
      resources :likes, only: [:create, :destroy]
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
