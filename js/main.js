  // For Hiding the Nav Bar
        $('#bar').click(function() {
            $(this).toggleClass('open');
            $('#page-content-wrapper ,#sidebar-wrapper').toggleClass('toggled');

        });


$('a').click(function(){
    $('a').removeClass('active');
    $(this).addClass('active');
    
})