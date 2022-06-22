const newsFilter = document.querySelectorAll('.box');

document.querySelector('.filter-list').addEventListener('click', event => {
   if (event.target.tagName !== 'LI') return false;

   let filterClass = event.target.dataset['f'];

   newsFilter.forEach(elem => {
      elem.classList.remove('hide');
      if (!elem.classList.contains(filterClass) && filterClass !== 'all-f') {
         elem.classList.add('hide');
      }
   });
});

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("portfolio__list-item");
for (var i = 0; i < btns.length; i++) {
   btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("portfolio__list-item--active");
      current[0].className = current[0].className.replace("portfolio__list-item--active", "");
      this.className += " portfolio__list-item--active";
   });
}

//scroll

$('.js-scroll').on('click', function () {

   let href = $(this).attr('href');

   $('html, body').animate({
      scrollTop: $(href).offset().top
   }, {
      duration: 800,
      easing: "swing"
   });

   return false;
});

//parallax

$(window).scroll(function (event) {
   var s = 0 - $(this).scrollTop() / 1.5;
   $('.js-parallax').css('transform', 'translate3d(0, ' + s + 'px, 0)');
});