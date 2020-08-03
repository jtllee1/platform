Rails.application.routes.draw do
  root to: 'pages#home'
  get '/cell_buster', to: 'pages#cell_buster'
  get '/connect_four', to: 'pages#connect_four'
  get '/helicopter', to: 'pages#helicopter'
  get '/caterpillar', to: 'pages#caterpillar'
  get '/tetris', to: 'pages#tetris'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
