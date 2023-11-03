Rails.application.routes.draw do
  resources :boards
  root to: redirect('/employees')
  get 'dashboard', to: 'static#dashboard'
  resources :employees
end
