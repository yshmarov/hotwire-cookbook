Rails.application.routes.draw do
  root to: redirect('/employees')
  get 'dashboard', to: 'static#dashboard'
  resources :employees
end
