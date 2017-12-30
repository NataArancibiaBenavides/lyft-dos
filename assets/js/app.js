$(document).ready(function() {
  /*$('#appWeb').hide();*/
  $("#splash").fadeIn(5000).slideUp(2000, splash);
  /*$('.modal').modal();*/
  $('select').material_select();

 function splash(){
  $('#FondoDos').fadeIn();
}
  });





   
  $(".dato").keyup(function() {
    if ($(this).val().length == 10) {
      $("#boton").removeAttr("disabled");
      $("#boton").removeClass("disabled");
    }
  });

 /* $(function () {
 
$('#datetimepicker').datetimepicker({
 
         pickTime: false
 
       });
 
});*/
 