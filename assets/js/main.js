// dashboard show and hide
    $('#openSidebar').click(function(){
    $('.leftbar').addClass('biger');
    });
    $('#closebtn').click(function(){
        $('.leftbar').removeClass('biger');
    });


    // partner slider
    $(document).ready(function(){
        $('.customer-logos').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1200,
            arrows: false,
            dots: false,
            pauseOnHover: true,
            responsive: [{
                breakpoint: 800,
                settings: {
                    slidesToShow: 4
                }
            }, {
                breakpoint: 520,
                settings: {
                    slidesToShow: 2
                }
            }]
        });
    });