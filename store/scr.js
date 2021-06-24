$(document).ready(function() {
    $('.header_burger').click(function(event){
        $('.header_burger,.header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        swipe: true,
        variableWithd: true
    });
});

