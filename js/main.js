
// Viewport bugfix for IE10 on Windows 8 & W8 Phone (< update 3)
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.querySelector('head').appendChild(msViewportStyle)
}



jQuery(document).ready( function() {

    // check if element exists
    jQuery.fn.exists = function(){ return this.length > 0; }

    // returns document height
    jQuery.fn.getDocHeight = function(){
        return Math.max(
            jQuery(document).height(),
            jQuery(window).height(),
            /* For opera: */
            document.documentElement.clientHeight
        );
    };


    /** handle animations **/

    /* OnEnd */
    jQuery(document).on('animationend, webkitAnimationEnd', function(e) {

        console.log(e);
        (jQuery(e.target).hasClass('animated')) ?  jQuery(e.target).removeClass('animated') : '';
    });


});