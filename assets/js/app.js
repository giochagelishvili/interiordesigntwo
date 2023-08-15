$(document).ready(function() {
    ScrollReveal({
        reset: false,
        distance: '60px',
        duration: 1500,
        delay: 200
    });

    var viewportWidth = $(window).width();

    ScrollReveal().reveal('.header-btn-div', { origin: 'left' });
    ScrollReveal().reveal('.hamburger-menu-icon', { origin: 'right' });
    ScrollReveal().reveal('.sidebar-menu li', { interval: 200 });
    ScrollReveal().reveal('.interior-design-portfolio, .nothing-impossible', { origin: 'left' });
    ScrollReveal().reveal('.motto', { origin: 'right' });
    ScrollReveal().reveal('.paragraph-container p', { origin: 'bottom', interval: 200, distance: '20px' });
    ScrollReveal().reveal('.yellow-rectangle', { origin: 'left' });
    ScrollReveal().reveal('.delve-into-portfolio', { origin: 'top' });
    ScrollReveal().reveal('.swipe-down-container', { origin: 'left' });
    ScrollReveal().reveal('.owl-carousel', { origin: 'left' });
    ScrollReveal().reveal('.mobile-carousel', { origin: 'left' });
    ScrollReveal().reveal('.bg-circle', { origin: 'bottom' });
    ScrollReveal().reveal('.bg-line', { origin: 'right' });
    
    if (viewportWidth > 1280) {
        ScrollReveal().reveal('.nav-menu li', { origin: 'top', interval: 300 });
    }
    
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