let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');
let header = document.querySelector('header');

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    stars.style.left = value*0.25 + 'px';
    moon.style.top = value*1.05 + 'px';
    mountains_behind.style.top = value*0.5 + 'px';
    mountains_front.style.top = value*0 + 'px';
    text.style.marginRight = value*4 + 'px';
    text.style.marginTop = value*1.5 + 'px';
    btn.style.marginTop = value*1.5 + 'px';
    header.style.top = value*0.5 + 'px';
})

// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});
$("[href^='#']").click(function() {
    id=$(this).attr("href")
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 2000);
});