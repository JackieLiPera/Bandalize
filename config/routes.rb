Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show] do
    end

    resources :artists, only: [:show, :index] do
      resources :comments, only: [:create, :destroy]
      resources :trackings, only: [:create, :destroy]
    end
    resources :events, only: [:show, :index] do
      resources :rsvp, only: [:create, :destroy]
    end
    resources :venues, only: [:show]
    resources :search, only: [:index]
  end
end
