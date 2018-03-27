Rails.application.routes.draw do
  resources :demos
  root to: 'demdos#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
