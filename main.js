$(document).ready(function(){
    $('.header-burger').click(function(event){
        $('.header-burger, .header-menu').toggleClass('active');
    });
});

$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
    });
});

$('.banner-testimonial-container').slick({
    dots: true,
    arrows: true,
});

document.querySelectorAll('.menu-item-link').forEach((elem) => {
    elem.addEventListener('click', function(e) {
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#','');
        document.querySelectorAll('.menu-item-link').forEach(
            (element) => element.classList.remove('active')
        );
        document.querySelectorAll('.tab-cont').forEach(
            (el) => el.classList.add('hide')
        );
        elem.classList.add('active');
        document.getElementById(id).classList.remove('hide');
    });
});