
$('#linea').on("mousedown",function(){
  $('#Container').on("mousemove",function(boca){
    var move = boca.pageX;
      if( move < 250){
        $('#linea').css({left:boca.pageX});
        $('#cerrada').css({left:boca.pageX});

    }
      boca.stopPropagation();
  })
})



    $('#linea2').on("mousedown",function(){
      $('.Container2').on("mousemove",function(e){
        var eye = e.pageY;
          if( eye < 250){
            $('#linea2').css({top:e.pageY});
            $('#ojoCerrado').css({top:e.pageY});
        }
          e.stopPropagation();
      })
    })
