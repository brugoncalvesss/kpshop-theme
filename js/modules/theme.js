(function($){
    $(".lazy").lazyload();

    $(document).ready(function(){
        $('.owl-carousel').owlCarousel({
            items: 1,
            nav: true,
            thumbs: true,
            thumbImage: false,
            thumbsPrerendered: true,
            thumbContainerClass: 'owl-thumbs',
            thumbItemClass: 'owl-thumb-item',
            responsive: {
                0: { items:1 },
                768: { items:1 },
                1200: { items:1 }
            }
        });
    });

})(jQuery);
