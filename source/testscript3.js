
const friends = [
    {
      "img": "https://lionheartrescue.github.io/newbestfriend/img/zenni.jpg",
      "alt" : "zenni"
    },
    {
      "img": "https://lionheartrescue.github.io/newbestfriend/img/bella.jpg" ,
      "alt" : "bella"
    },
    {
      "img": "https://lionheartrescue.github.io/newbestfriend/img/canela.jpg",
      "alt" : "canela"
    },
    {
      "img": "https://lionheartrescue.github.io/newbestfriend/img/charlie.jpg",
      "alt" : "charlie"
    },
     {
      "img": "https://lionheartrescue.github.io/newbestfriend/img/chula.jpg",
      "alt" : "chula"
    },
     {
      "img": "https://lionheartrescue.github.io/newbestfriend/img/ferny.jpg",
      "alt" : "ferny"
    },
     {
      "img": "https://lionheartrescue.github.io/newbestfriend/img/fifi.jpg",
      "alt" : "fifi"
    },
     {
      "img": "https://lionheartrescue.github.io/newbestfriend/img/goliath.jpg",
      "alt" : "goliath"
    },
     {
      "img": "https://lionheartrescue.github.io/newbestfriend/img/ivy.jpg",
      "alt" : "ivy"
    },
     {
      "img": "https://lionheartrescue.github.io/newbestfriend/img/lucy.jpg",
      "alt" : "lucy"
    },
     {
      "img": "https://lionheartrescue.github.io/newbestfriend/img/mayo.jpg",
      "alt" : "mayo"
    },
     {
      "img": "https://lionheartrescue.github.io/newbestfriend/img/obi_wan_kenobi.jpg",
      "alt" : "obi_wan_kenobi"
    },
     {
      "img": "https://lionheartrescue.github.io/newbestfriend/img/ringo.jpg",
      "alt" : "ringo"
    },
     {
      "img": "https://lionheartrescue.github.io/newbestfriend/img/simon.jpg",
      "alt" : "simon"
    },
     {
      "img": "https://lionheartrescue.github.io/newbestfriend/img/toby.jpg",
      "alt" : "toby"
    },
     {
      "img": "https://lionheartrescue.github.io/newbestfriend/img/zenni.jpg",
      "alt" : "zenni"
    },
     {
      "img": "https://lionheartrescue.github.io/newbestfriend/img/bella.jpg",
      "alt" : "bella"
    }
     ]
;


//on page load
$(document).ready(function () {  

// slide();
    });
// end on page load

var x = 0;
var y = 1;
var z = 2;

var a = 0;
var b = 1;
var c = 2;

//<img src="img_avatar.png" alt="Avatar" class="image" style="opacity:0.3">
var aa = '<img src="'
var ab = '" '
var iO = "<img src='"
var iOF ='style="opacity:0.6"'
var iOF2 = 'style="opacity:0.8"'
var iC = "'</img>"
var bestfriendlength = friends.length -1;

function slide(){

  // for (var i = 0; i > 3; i++) {
    
   
   $('#slideshow').html(aa + friends[x].img + ab + iOF +  iC   + iO + friends[y].img + iC + aa + friends[z].img + ab + iOF2 +  iC );

incMe()
setTimeout(function(){slide()}, 3000);
  // }
      }




function incMe() {
  if (x < friends.length){
          x++;     document.getElementById('playScoreEval').value = x;
           y++;     document.getElementById('dealScoreEval').value = y;
            z++;     document.getElementById('otherScoreEval').value = z;
}}

function manualSlide(){
  var a = document.getElementById('playScoreEval').value;
  var b = document.getElementById('dealScoreEval').value;
  var c = document.getElementById('otherScoreEval').value;
     $('#slideshow').html(aa + friends[a].img + ab + iOF +  iC   + iO + friends[b].img + iC + aa + friends[c].img + ab + iOF2 +  iC );

}




///left and right buttons

$(document).ready(function () {  
$('#leftmove').click(function () {
    leftmove();

    });
 });


$(document).ready(function () {  
$('#rightmove').click(function () {
 rightmove();

    });
 });


function leftmove() {  

          a++;     document.getElementById('playScoreEval1').value = a;
           b++;     document.getElementById('dealScoreEval1').value = b;
            c++;     document.getElementById('otherScoreEval1').value = c ;
              manualSlide();
             }

function rightmove(){

    a--;     document.getElementById('playScoreEval1').value = a;
           b--;     document.getElementById('dealScoreEval1').value = b;
            c--;     document.getElementById('otherScoreEval1').value = c ;
              manualSlide();

}






// function runOnce(){
//    if (x < friends.length){
//           x++;     document.getElementById('playScoreEval').value = x;
//                  setTimeout(function(){ slide()}, 3000);
//        } 
// }



// function zeroOut(){
//   // x+= -friends.length;
//     x+= -bestfriendlength;
//             document.getElementById('playScoreEval').value = x;
//           setTimeout(function(){ slide()}, 3000);
// }

// function loopMe (){
//     if (x < bestfriendlength){
//           x++;     document.getElementById('playScoreEval').value = x;
//                  setTimeout(function(){ slide()}, 3000);
//        } else if (x == bestfriendlength){ 
//      zeroOut();
//          }
// }