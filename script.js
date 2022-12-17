$(document).ready(function(){
    $('ul li a').click(function(){
        $('ul li').removeClass('active');
        $('.tab-content .tab').hide();
        let clickid = jQuery(this).data("id");
        console.log('clickid:', clickid);
        $(clickid).show();
        jQuery(jQuery(this).data("id")).show();
        $(this).closest('li').toggleClass('active');
        
    });
});
