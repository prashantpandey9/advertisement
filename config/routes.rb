Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'advertiser', to: 'advertiser#index'
    end
  end
  get '*path', to: 'application#frontend_index_html', constraints: lambda { |request|
      !request.xhr? && request.format.html?
    }
    
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
``