$(function () {
    'ues strict'
    $('html').niceScroll({
        cursorcolor: '#f7600e',
        cursorwidth: 10,
        cursorborder: '1px solid #f7600e'
    });

    $(window).scroll(function () {
        var navbar = $('.navbar');
        $(window).scrollTop() >= navbar.height() ? navbar.addClass('scrolled') : navbar.removeClass('scrolled');
    }); 


    // Scroll To Features

    $('.header .arrow i').click(function () {
        $('html, body').animate({
            scrollTop: $('.features').offset().top -60
        }, 1000);
    });

    $('.work').click(function () {
        $('html, body').animate({
            scrollTop: $('.our-work').offset().top -60
        }, 1000);
    });

    $('.hire').click(function() {
        $('html, body').animate({
            scrollTop: $('.our-team').offset().top -60
        }, 1000);
    });

        // Show Hidden Items
        $('.work-btn').click(function () {
            $(this).hide();
            $('.our-work .hidden').fadeIn(1000);
        });

        // Testimonials

        var leftArrow = $('.testimonials .fa-chevron-left'),

            rightArrow = $('.testimonials .fa-chevron-right');

        function checkClient() {
            $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();

            $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();
        }

        checkClient();

        $('.testimonials i').click(function () {
            if ($(this).hasClass('fa-chevron-right')) {

                $('.testimonials .active').fadeOut(100, function () {
                    $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                    checkClient();

                });

            } else {
                $('.testimonials .active').fadeOut(100, function () {
                    $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                    checkClient();
                });
            }
        });

});










