Rails.application.routes.draw do
    resources :pages, only: %i[index] do
        get :contacts, on: :collection
        get :blog, on: :collection
    end

    root to: 'pages#index'
end
