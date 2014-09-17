jQuery(document).ready( function() {

    /* PlaceHolder search field */
    jQuery('.placeholder').focus(function() {
        var value = jQuery(this).val();
        if (value == jQuery(this).attr('placeholder')) {
            jQuery(this).val('');
        }
    }).blur(function() {
        var input = jQuery(this);
        if (input.val() == '') {
            input.val(input.attr('placeholder'));
        }
    }).blur();
});