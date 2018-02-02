Rails.application.routes.draw do
  namespace :api do
    get 'posts/add'
  end

  namespace :api do
    get 'posts/create'
  end

  namespace :api do
    get 'posts/index'
  end

  namespace :api do
    get 'posts/show'
  end

  namespace :api do
    get 'posts/destroy'
  end

  namespace :api do
    get 'posts/edit'
  end

  namespace :api do
    get 'posts/update'
  end

  get 'posts/add'

  get 'posts/create'

  get 'posts/index'

  get 'posts/show'

  get 'posts/destroy'

  get 'posts/edit'

  get 'posts/update'

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users
    resource :session, only: [:create, :destroy]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
