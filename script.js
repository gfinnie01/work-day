var dt = new Date();
document.getElementById('date-time').innerHTML=dt;

$('.container').on('click', '.grade', function()  {
    var parentId = $(this).parent().attr('data-id');
     var name = ($(this).text());
     console.log(name);
     localStorage.setItem(parentId, name);
 });
 $('.name').each(function() {
    var parentId = $(this).parent().attr('data-id');
    var name = localStorage.getItem(parentId);
    $(this).val(name);
 });