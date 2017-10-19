// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require_tree .

$(function() {
    $(document).foundation();

    $('.call a').on('click', function (e) {
        e.preventDefault();
        var elem = $('nav .phone');
        if (elem.hasClass('open')) {
            elem.removeClass('open');
        } else {
            elem.addClass('open');
        }
    });

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        var height = $('.banner').height() - 94;
        if (scroll >= height) {
            $('.nav').removeClass('no_logo');
        } else {
            if ($('.nav').hasClass('no_logo') == false) {
                $('.nav').addClass('no_logo');
            }
        }
    });
});
