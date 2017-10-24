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

    $('#page_1').show();
    $('.text_block .buttons .button a').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#blog').offset().top - 91
        }, 1000);

        var page_count = parseInt($('.main_article').data('pages'));
        var current = parseInt($('.main_article').attr('data-page'));
        var next;
        if(e.target.id == 'poprzednie') {
            if (current == 1) {
                next = page_count;
            } else {
                next = current - 1;
            }
        } else if (e.target.id == 'nastepne') {
            if (current == page_count) {
                next = 1;
            } else {
                next = current + 1;
            }
        }
        $('#page_' + current).fadeOut('slow', function() {
            $('#page_' + next).fadeIn('slow');
            $('#page_' + next).children('.text').removeClass('open');
            $('#page_' + next).children('.button').show();
        });
        $('.main_article').attr('data-page', next);
    });

    $('.dalej').on('click', function (e) {
        e.preventDefault();
        $(this).parent('.button').parent('.page').children('.text').addClass('open');
        $(this).parent('.button').hide();
    });

    $('.other_articles .photo a').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#blog').offset().top - 91
        }, 1000);

        var next = parseInt($(this).parent('.photo').parent('.article').data('page'));
        var current = parseInt($('.main_article').attr('data-page'));
        $('#page_' + current).fadeOut('slow', function() {
            $('#page_' + next).fadeIn('slow');
            $('#page_' + next).children('.text').removeClass('open');
            $('#page_' + next).children('.button').show();
        });
    });

    $('.call a').on('click', function (e) {
        e.preventDefault();
        var elem = $('nav .phone');
        if (elem.hasClass('open')) {
            elem.removeClass('open');
        } else {
            elem.addClass('open');
        }
    });

    $('#index .blog').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('nav').offset().top
        }, 1000);
    });

    $('#uslugi').on('click', function (e) {
        if(e.target.id == 'uslugi') {
            e.preventDefault();
            $('#uslugi').foundation('toggle');
        }
    });

    $('#uslugi .block a').on('click', function (e) {
        e.preventDefault();
        $('#uslugies').fadeOut('slow', function() {
            $('#second_popup').fadeIn('slow');
        });
    });

    $('#uslugi #wroc').on('click', function (e) {
        e.preventDefault();
        $('#second_popup').fadeOut('slow', function() {
            $('#uslugies').fadeIn('slow');
        });
    });

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        var height = $('.banner').height() - 91;
        if (scroll >= height) {
            $('.nav').removeClass('no_logo');
        } else {
            if ($('.nav').hasClass('no_logo') == false) {
                $('.nav').addClass('no_logo');
            }
        }
    });
});
