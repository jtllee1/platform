Rails.application.routes.draw do
  root to: 'pages#home'
  get '/cell_buster', to: 'pages#cell_buster'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
