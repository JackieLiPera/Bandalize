Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show] do
      resources :rsvp, only: [:create]
      resources :trackedartist, only: [:create]
    end
    resources :artists, only: [:show, :index]
    resources :events, only: [:show, :index]
    resources :venues, only: [:show]
  end

end
