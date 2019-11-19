$(document).ready(function ()  
            {
                    $.ajax
                        ({
                    method: "GET",
                    url: " https://lionheartrescue.github.io/newbestfriend/bestFriendFinder.json"
                         }).done(function(data) 

                               { var content = "";
                       for(var i in data["items"]){
       
       var img = data["items"][i].img;
       var alt = data["items"][i].alt;
 
       content += "<img src=\"" +img+ "\" alt=\"" +alt+ "\">"
    }          $("#owl-demo").html(content);
                              });
            });
   