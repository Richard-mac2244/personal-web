import $ from 'jquery';

$(function () {
  $(document).scroll(function () {
    var $nav = $(".nav");
    $nav.toggleClass('scrolled', $(this).scrollTop() > 30);
  });
});
