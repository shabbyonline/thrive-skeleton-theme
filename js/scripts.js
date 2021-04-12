jQuery( document ).ready(function() {

  // Fancybox for youtube
  jQuery(".fancybox-youtube").fancybox({
    maxWidth    : 800,
    maxHeight   : 600,
    fitToView   : true,
    width       : '70%',
    height      : '70%',
    autoSize    : true,
    closeClick  : true,
    openEffect  : 'none',
    closeEffect : 'none',
    padding     : 5,
    helpers     : {
        overlay : {
            css : {
                'background' : 'rgba(0, 0, 0, 0.35)'
            }
        }
    }
  });

  // Default Fancybox
  jQuery(".fancybox").fancybox({
    maxWidth    : 800,
    maxHeight   : 600,
    fitToView   : true,
    width       : '70%',
    height      : '70%',
    autoSize    : true,
    closeClick  : true,
    openEffect  : 'none',
    closeEffect : 'none',
    padding     : 5,
    helpers     : {
        overlay : {
            css : {
                'background' : 'rgba(0, 0, 0, 0.35)'
            }
        }
    }
  });

});


// Shrink Header
jQuery(window).scroll(function () {
  if (jQuery(document).scrollTop() > 1 ) {
    jQuery('.site-header').addClass('shrink');
  } else {
    jQuery('.site-header').removeClass('shrink');
}
    

// Shows all <scripts> in the console for WP Rocket Debugging
/*
jQuery("script[src]").each(function( i, src ) {
   console.log( src );
});
*/ 


});