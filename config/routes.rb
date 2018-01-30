Rails.application.routes.draw do
  get 'users/new'

  get 'users/create'

  get 'users/index'

  get 'users/show'

  get 'users/edit'

  get 'users/update'

  get 'users/destroy'

  get 'session/new'

  get 'session/create'

  get 'session/destroy'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
