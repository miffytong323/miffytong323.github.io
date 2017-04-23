window.sr = ScrollReveal({reset: true});
sr.reveal('.sr-icons');

$(function () {
  $('.nav-link').bind('click', function(event) {
    event.preventDefault();
    var $anchor = $(this);

    $('body').animate({scrollTop: $($anchor.attr('href')).offset().top}, 1000, 'easeInOutQuint');
  }),
  $('#homeIcon').bind('click', function(event) {
    event.preventDefault();
    var $anchor = $(this);

    $('body').animate({scrollTop: '0'}, 1000, 'easeInOutQuint');
  }),
  $('#headingChevron').bind('click', function(event) {
    event.preventDefault();
    var $anchor = $(this);

    $('body').animate({scrollTop: $($anchor.attr('href')).offset().top}, 1000, 'easeInOutQuint');
  })
});
