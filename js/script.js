// menu btn
var menuList = $('.menu__list');
var btn = $('.line').on('click', function() {
    menuList.toggleClass('active');
    btn.toggleClass('animation__line');
});

// slider
$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    pouseOnDotsHover: false,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    initialSlide: 2,
    centerMode: true,
    fade: true,
});


// form
$('.wrong').hide();

$('button[type="submit"]').on('click', function() {
    var name = $('input[type="text"]').val();
    var email = $('input[type="email"]').val();
    var textarea = $('textarea[name="text"]').val();

    while(true) {
        if (name == '') 
            $('#name').show();
        else
            $('#name').hide();

        if (email == '') 
            $('#email').show();
        else
            $('#email').hide();

        if (textarea == '') 
            $('#textarea').show();
        else
            $('#textarea').hide();

        if(name != '' && email != '' && textarea != '') {
            $('.wrong').hide();

            console.log('name: ' + name);
            console.log('email: ' + email);
            console.log('text: ' + textarea);
        } else {
            break;
        }

        break;
    }
});


// scroll animation 
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 300, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
});
