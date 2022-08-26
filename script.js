

$('.container').on('click', '.save', function()  {
    var parentId = $(this).parent().attr('data-id');
    var name = $(this).prev().val();
    console.log(name);
    localStorage.setItem(parentId, name);
 });
 $( '.name' ).each(function() {
    var parentId = $(this).parent().attr('data-id');
   var name = localStorage.getItem(parentId);
   $(this).val(name);
  });


  var dt = new Date();
  document.getElementById('date-time').innerHTML=dt;