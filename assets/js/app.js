$(document).ready(function() {
    // Owl carousel
    $(".owl-carousel").owlCarousel({
        //Basic Speeds
        slideSpeed : 800,
        paginationSpeed : 800,
     
        //Autoplay
        autoPlay : false,
        goToFirst : true,
        goToFirstSpeed : 1000,
     
        // Navigation
        navigation : true,
        navigationText : ["<",">"],
        pagination : true,
        paginationNumbers: false,
     
        // Responsive
        responsive: true,
        items : 2,
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [980,3],
        itemsTablet: [768,2],
        itemsMobile : [479,1]
    })

    $('.hamburger-menu-icon').on('click', function() {
        $('.nav-menu').slideToggle(350);
    });

    let imgId = 0;
    let activeIndex = 0;
    const circles = $('.circle');

    // Function to update the active circle
    function updateActiveCircle() {
        circles.removeClass('active');
        circles.eq(activeIndex).addClass('active');
    }

    $('.arrow-down').on('click', function() {
        imgId++;
        activeIndex++;

        if (imgId > 4) {
            imgId = 0;
            activeIndex = 0;
        }

        $.getJSON('data.json', function(data) {
            let src=data[imgId]['src'];

            $('.carousel-img').fadeOut('150', function() {
                // Change the src attribute
                $('.carousel-img').attr('src', src);

                // Fade in the new image
                $('.carousel-img').fadeIn('150');
                updateActiveCircle()
            });
        });
    });

    $('.arrow-up').on('click', function() {
        imgId--;
        activeIndex--;

        if (imgId < 0) {
            imgId = 4;
            activeIndex = 4;
        }

        $.getJSON('data.json', function(data) {
            let src=data[imgId]['src'];
              // Fade out the current image
            $('.carousel-img').fadeOut('150', function() {
                // Change the src attribute
                $('.carousel-img').attr('src', src);

                // Fade in the new image
                $('.carousel-img').fadeIn('150');
                updateActiveCircle()
            });
        });
    });
});