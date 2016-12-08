new WOW().init();
$(document).ready(function() {
    $('#owl-demo').owlCarousel({
        lazyLoad: true,
        navigation: true,
        pagination: false,
        slideSpeed: 500,
        paginationSpeed: 400,
        singleItem: true,
    });
});
