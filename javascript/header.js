$(document).ready(function(){
  (() => {
    var linkPath = window.location.pathname;
    switch (linkPath) {
      case "/": 
        $('#header-bar-home').removeClass('header-bar-link');
        $('#header-bar-home').addClass('header-bar-active');
        break;
      case "/acting/": 
        $('#header-bar-acting').removeClass('header-bar-link');
        $('#header-bar-acting').addClass('header-bar-active');
        break;
      case "/writing/": 
        $('#header-bar-writing').removeClass('header-bar-link');
        $('#header-bar-writing').addClass('header-bar-active');
        break;
      case "/blog/": 
        $('#header-bar-blog').removeClass('header-bar-link');
        $('#header-bar-blog').addClass('header-bar-active');
        break;
    }
  })();
});