// call css Varariables function - this helps fix the non support of custom variable in Internet Explorer 11
cssVars();


// open and close the NAV

$('.nav-prompt').click(function(){

    if($('.nav-inner').attr('aria-expanded') == 'false'){

        $('.nav-inner').attr('aria-expanded', true);

    } else {
        $('.nav-inner').attr('aria-expanded', false); 
    }

});