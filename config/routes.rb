Rails.application.routes.draw do
  root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"

  get '/cell_buster', to: 'pages#cell_buster'
  get '/connect_four', to: 'pages#connect_four'
  get '/helicopter', to: 'pages#helicopter'
  get '/caterpillar', to: 'pages#caterpillar'
  get '/tetris', to: 'pages#tetris'
  get '/pong', to: 'pages#pong'
  get '/simon_says', to: 'pages#simon_says'
  get '/match_3', to: 'pages#match_3'
  get '/hangman', to: 'pages#hangman'
  get '/play_2048', to: 'pages#play_2048'
  get '/sound_beat', to: 'pages#sound_beat'
  get '/balloon_blast', to: 'pages#balloon_blast'
  get '/blockman', to: 'pages#blockman'
  get '/depth_charge', to: 'pages#depth_charge'
end
