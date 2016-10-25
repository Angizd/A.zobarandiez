$('button').click(function(e){

    e.preventDefault();

    var file = $('input[type="file"]').get(0).files[0];

    var formData = new FormData();
    formData.append('file', file);

    $.ajax({
        url: '/upload',
        method: 'POST',
        data: formData,
        processData: false,
        contentType: false,
         success: function(data) {
              $("img").attr('src',data.file).css("width:50px, height:50px");
         }
    });
});

$('#submitUrl').click(function(e){
   e.preventDefault();

   var url= $('#url').val();
   var formdata = new FormData();
   formdata.append('url',url);

   $.ajax({
      url: '/upload2',
      type: 'POST',
      data: formdata,
      processData: false,
      contentType: false,
      success: function(url) {
        console.log(url);
      }
   });
});
