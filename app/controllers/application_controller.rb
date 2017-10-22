class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception
    before_action :previous_page

    private

    def previous_page
        session[:previous_page] = session[:current_page]
    end
end
