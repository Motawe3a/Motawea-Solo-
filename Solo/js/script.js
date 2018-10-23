/* preloader */

$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/* owl carousel */

$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']

    });
});


/* Progress Bars */

$(function () {

    $("#progress_elements").waypoint(function () {

        $(".progress-bar").each(function () {

            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });



    /*

     $(".progress-bar").each(function() {
        
        $(this).animate({
            width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
    */
});


/*   responsive tabs */
$(function () {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});









/*
$(function(){
   $("#progress-elements").waypoint(function(){
       $(".progress-bar").each(function(){
           $(this).animate({
               width:$(this).attr("aria-valuenow") +"%"
           }, 1000);
       });
       this.destroy();
   },{
       offset: 'bottom-in-view'
   });
});
*/



/* portfolio */

$(window).on('load', function () {

    $("#isotope-container").isotope({});
    $("#isotope-filters").on('click', 'button', function () {

        var filterValue = $(this).attr('data-filter');

        $("#isotope-container").isotope({
            filter: filterValue
        });
        $("#isotope-filters").find('.active').removeClass('active')
        $(this).addClass('active');

    });
});



/* magnifier */

$(function () {

    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
        // other options
    });
});


/* testimonials */

$(function () {
    $("#testimonials-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']

    });
});



/* stats */

$(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});

/* team */

$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
        }

    });
});


/* Clients */

$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']

    });
});


/* google map */

$(window).on('load', function () {

    // map variables

    var addressString = '230 Broadway, NY, New York 10007, USA';
    var myLating = {
        lat: 40.712685,
        lng: -74005920
    };

    // render map 

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: myLating
    });

    // marker
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map

    });

    // info window

    var infowindow = new google.maps.InfoWindow({

        content: addressString
    });

    marker.addListner('click', function () {
        infowindow.open(map, marker);
    });

    google.maps.event.addDomListener(window, 'resize', function () {
        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);

    });


});


/* navigation */

$(function () {

    showHideNav();

    $(window).scroll(function () {

        showHideNav();

    });

    function showHideNav() {
        if ($(window).scrollTop() > 50) {

            $("nav").addClass("white-nav-top");
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");
            $(".btn-back-to-top").fadeIn();

        } else {
            $("nav").removeClass("white-nav-top");
            $(".navbar-brand img").attr("src", "img/logo/logo.png");
            $(".btn-back-to-top").fadeOut();
        }
    }
});

// smooth scrolling 

$(function () {

    $(".smooth-scroll").click(function (event) {

        event.preventDefault();
        // get section id
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});


/*  Mobile Menu  */


$(function () {

    // Show mobile nav
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    });

    // Hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });

});


/*  Animation  */

$(function(){
   
    new WOW().init();
});
/*
$(window).on('load', function () {

    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");

});
*/



