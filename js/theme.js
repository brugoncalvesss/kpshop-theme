(function($){
    $(".lazy").lazyload();

    jQuery(function() {
        $('#owl-product').owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            loop: false,
            thumbs: true,
            thumbImage: false,
            thumbsPrerendered: true,
            thumbContainerClass: 'owl-thumbs',
            thumbItemClass: 'owl-thumb-item'
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
