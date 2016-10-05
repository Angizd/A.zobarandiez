var frameId;
var links = $('.headline');
var box = $('#container');

var distance = 0;

$.ajax({
    url: 'http://127.0.0.1:8080/JSON',
    method: 'GET',
    dataType:'json',
    success: function(data) {
        console.log(data[1].href);
         for (var i =0; i < data.length; i++){
             $('#container').append("<a class='headline' href='" + data[i].href + "'>" + data[i].text + "</a>");
         }

    }
});



function newAnimation() {
    $('#container').css({left: distance + 'px'});
    var width = $('.headline:eq(0)').outerWidth();
    // console.log($('#container').offset().left);
    if ($('#container').offset().left < -width) {
        // $('.container').appendChild(links[0]);
        $('#container').append(links[0]);
        distance += width;
        $('#container').css({left: distance + 'px'});
    }

    distance -= 2;

    frameId = requestAnimationFrame(newAnimation);
}

frameId = requestAnimationFrame(newAnimation);

$('.headline').on('mouseenter',function(){
    cancelAnimationFrame(frameId);
});
$('.headline').on('mouseleave',function(){
    frameId = requestAnimationFrame(newAnimation);
});
