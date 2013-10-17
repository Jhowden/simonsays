$(document).ready(function(){
  $('#get_color').click(function(event){
    event.preventDefault();
    console.log('click')

     // var url = $('#get_color').attr('href')

    
    $.post('/color', function(response){
      console.log(response)
      var json = $.parseJSON(data)
      console.log(json)
      $('#color_me').html(response);
    }, "json");
  });
});
