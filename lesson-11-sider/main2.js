;(function(){
    $(function(){
        $('.slider-1').slick({
            dots: true,
           /* arrows: false*/
            autoplay: true,
            autoplaySpeed: 500,
            /*fade: true,*/
            /*initialSlide: 2,*/
            /*slidesPerRow:2,*/
            slidesToShow:3,
            slidesToScroll:1,
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        dots: false,
                        slidesToShow:2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        dots: false,
                        arrows:false,
                        slidesToShow: 1
                    }
                }
            ],
            asNavFor: 'slider-2',
            centerMode: true,
            focusOnSelect: true
        });
        $('.slider-2').slick({
            arrows:false,
            dots: true,
            slidesToShow:3,
            slidesToScroll:1,
            asNavFor: 'slider-1'
        });

    });
})(jQuery);