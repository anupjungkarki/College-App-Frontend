  // For Hiding the Nav Bar
$('#bar').click(function() {
  $(this).toggleClass('open');
    $('#page-content-wrapper ,#sidebar-wrapper').toggleClass('toggled');
});


$('a').click(function(){
  $('a').removeClass('active');
   $(this).addClass('active');
    
})

// Js for Auto Add Semester fees-content
 $('.amount').keyup(function() {
   var sum = 0;
   $('.amount').each(function() {
        sum += Number($(this).val());
    });
     $('#total').val(sum);   
});


// Make Equal To all Semester
  $(document).ready(function(){
        $('#btn1').click(function(){
        $('#sem2').val($('#sem1').val());
        $('#sem3').val($('#sem1').val());
        $('#sem4').val($('#sem1').val());
        $('#sem5').val($('#sem1').val());
        $('#sem6').val($('#sem1').val());
        $('#sem7').val($('#sem1').val());
        $('#sem8').val($('#sem1').val());
        var sum = 0;
        $('.amount').each(function() {
        sum += Number($(this).val());
     });
    $('#total').val(sum);
    });
});

//File upload hide and show 
$(document).ready(function() {
  $("#checkMark1").click(function() {
    $("#form1").toggle();
  });
   $("#checkMark2").click(function() {
    $("#form2").toggle();
  });
});
