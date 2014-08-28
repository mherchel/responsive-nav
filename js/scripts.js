(function($, window, document) { 
  $(function() {
    
    // Show the menu
    $('.menu-mobile').click(function(){
      $('.menu--parent').toggleClass('js-menu-active');
      $(this).toggleClass('js-active');
    });

    // Prepend nav arrow on menu items that have submenus
    $('.menu-item--parent').prepend('<span class="nav-click"></span>');

    // Show the submenu when nav is clicked
    $('.nav-click').click(function(){
      $(this).toggleClass('js-click-active');
      $(this).siblings('.menu--child').toggleClass('js-menu-active');
    });
  });
}(window.jQuery, window, document));
