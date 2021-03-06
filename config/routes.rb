Rails.application.routes.draw do
  root to: 'pages#home'
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
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
