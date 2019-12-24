    $(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        smartSpeed:2000,

        responsive:{
            0: {
                items: 1
            }
        }
    });


        $('.header__burger').click(function (event) {
            $('.header__burger,.header__nav').toggleClass('active');
            $('body').toggleClass('lock');
        })
});