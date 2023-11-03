Rails.application.routes.draw do
  resources :boards
  root to: 'session#new'
  get 'dashboard', to: 'static#dashboard'
  get 'session/new', to: 'session#new'
  post '/session', to: 'session#create', as: 'session'
  resources :employees
end