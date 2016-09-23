
$(document).ready(function(){
        var input;
        var inputValue;
        var moreUrl;
        var url;

    $("#search").keyup(function(){
        input =$('input').val();
        inputValue = $('input').val();
        inputValue=encodeURIComponent (inputValue);
    });


$('#go').click(function(){
     $.ajax({
             url:'https://api.spotify.com/v1/search?q=' + inputValue +'&type=' + $('select').val(),
             method:'GET',
             dataType:'json',



       success: function(data) {
                $('.resultContainer').empty();
                $('.search').empty();

      moreUrl = data.artists.next;

        if($('select').val()=='artist'){
            var artist=data.artists.items;
                      if(artist.length ==0){
                            $('.resultFor').append ("<h1>No results found </h1>")
                      }else{
                        for(var i=0;i<data.artists.items.length; i++){
                            $('.resultContainer').append("<p>" + data.artists.items[0].name + "</p>");
                            if(data.artists.items[i].images[0]){
                              $('.resultContainer').append("<img src="+ data.artists.items[i].images[0].url + "></img>")
                            }else{
                              $('.resultContainer').append('<img class="placeholder" src="Nopicturefound.png"></img>')
                            }
                          }
                    }if(data.artists.items.length == 0) {
                      $('.resultContainer').append("<p>no results</p>")
                  }
                }

        else {$('select').val()=='albums'
                        for(var i=0;i<data.albums.items.length; i++){
                            $('.resultContainer').append("<p>" + data.albums.items[i].name + "</p>");
                      if(data.albums.items[i].images.length>0){
                            $('.resultContainer').append("<img src="+ data.albums.items[i].images[0].url + "></img>")
                      }else{
                            $('.resultContainer').append('<img class="placeholder" src="Nopicturefound.png"></img>')
                      }
                    }
                    if(data.albums.items.length == 0) {
                      $('.resultContainer').append("<p>no results</p>")


                  }
                  }

            }


    })
  });
})
