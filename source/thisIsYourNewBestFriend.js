     var baseUrl = "https://lionheartrescue.github.io/newbestfriend/img/";
        var dogPictures = ["bella.jpg","canela.jpg","charlie.jpg","chula.jpg",]
var iO = "<img src='" ;
var iC = "'></img>";
  //iO + baseUrl + dogPictures[0] +iC

  var bLink = [{"link":"<a href ='https://lionheartrescue.github.io/newbestfriend/img/newbestfriend.html'>Home</a>"},{"link":"<a href='https://www.facebook.com'>Facebook</a>"}]


//content loaders

//top carosel
// $(document).ready(function () {  
//     $('#append').html('1')

//     });


//bottom links
console.log(bLink.length)

$(document).ready(function () {  
for (var i = 0 ; i < bLink.length; i++) {
  $('#bLink').append("<div id='linkList'>" + bLink[i].link + " </div>")
}
   $('#bLink').append("<br>")

    });


