
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
    



});