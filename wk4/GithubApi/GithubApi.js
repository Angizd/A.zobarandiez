$(document).ready(function() {
    var templates = document.querySelectorAll('script[type="text/handlebars"]');

    Handlebars.templates = Handlebars.templates || {};
    Handlebars.partials = Handlebars.templates;

    Array.prototype.slice.call(templates).forEach(function(script) {
    Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });



var input;
input = $('input').val();

$('button').click(function(){
  input = $('input').val();
       $.ajax({
               url:'https://api.github.com/users/' + input +"/repos",
               method:'GET',
               dataType:'json',
               username:'angizd',
               password:'berlin2016',
               success:function(data){
                 console.log(data);

              $('#content').append(Handlebars.templates.result({data:data}))
               }
             });
           });
         })
