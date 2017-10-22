class PagesController < ApplicationController
    def index
        session[:current_page] = __method__
    end

    def contacts
        session[:current_page] = __method__
    end

    def uslugi
        session[:current_page] = __method__
    end

    def about
        session[:current_page] = __method__
    end

    def blog
        session[:current_page] = __method__
    end
end
