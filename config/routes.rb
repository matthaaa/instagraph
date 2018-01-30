Rails.application.routes.draw do
  namespace :api do
    get 'sessions/new'
  end

  namespace :api do
    get 'sessions/create'
  end

  namespace :api do
    get 'sessions/destroy'
  end

  namespace :api do
    get 'users/new'
  end

  namespace :api do
    get 'users/create'
  end

  namespace :api do
    get 'users/edit'
  end

  namespace :api do
    get 'users/update'
  end

  namespace :api do
    get 'users/index'
  end

  namespace :api do
    get 'users/show'
  end

  namespace :api do
    get 'users/destroy'
  end

  root to: 'static_pages#root'
  
  namespace :api, defaults: {format: :json} do
    resources :users
    resource :session
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
