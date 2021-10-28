$(document).ready(function(){
    jQuery(".bar").click(function(){
        jQuery(".toggle-nav").toggleClass("active");
        jQuery(this).toggleClass("active-toggle");
        var activetoggle = jQuery(".bar").hasClass("active-toggle");
        if(activetoggle === true) {
            jQuery(".bar i").removeClass("fa-bars");
            jQuery(".bar i").addClass("fa-close");
        }else {
            jQuery(".bar i").removeClass("fa-close");
            jQuery(".bar i").addClass("fa-bars");
        }
    });
});