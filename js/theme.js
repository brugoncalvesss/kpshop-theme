(function($){
    $(".lazy").lazyload();

    jQuery(function() {
        $('#owl-product').owlCarousel({
            items: 1,
            nav: false,
            dots: true,
            loop: false,
            thumbs: false
        });

        $("#owl-slide").owlCarousel({
            items: 1,
            nav: true,
            dots: true,
            loop: true,
            thumbs: false,
            autoPlay: 5000,
            stopOnHover: false,
        });
    });
})(jQuery);
