$(document).ready(function(){
  $('#get_color').click(function(event){
    event.preventDefault();
    console.log('click')

     // var url = $('#get_color').attr('href')

    
    $.post('/color', function(response){
      $('#color_me li:nth-child(' + response.li + ')').css('background-color', response.col);
    }, "json");
  });
});
