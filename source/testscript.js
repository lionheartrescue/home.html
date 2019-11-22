
const friends = [{
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
    }
     ]
;


//on page load
$(document).ready(function () {  
  autoslide();
    });
// end on page load

// autoslide();
//function slide(){
   // $('#slideshow').html(aa + friends[x].img + ab + iOF +  iC   + iO + friends[y].img + iC + aa + friends[z].img + ab + iOF2 +  iC );
   //    }

//<
function incMe2() {
  if (x < friends.length){
          x++;     document.getElementById('playScoreEval').value = x;
}}

//>
function decMe2() {
   if (x > 0){
          x--;     document.getElementById('playScoreEval').value = x;
}}

var x = 0;
var iO = "<img src='"
var iC = "'</img>"
var bestfriendlength = friends.length -1;


function autoslide(){
  
    $('#slideshow').html(iO + friends[x].img + iC);

        // loopMe();
       if (x < friends.length){  runOnce();
       
      }}

function slide(){
  
    $('#slideshow').html(iO + friends[x].img + iC);

        // loopMe();
        // runOnce();

      }



///left and right buttons

/// <  adds to value
$(document).ready(function () {  
$('#leftmove').click(function () {
   if (x < friends.length){incMe2();
   slide();}


    });
 });

// >  subtracts from value
$(document).ready(function () {  
$('#rightmove').click(function () {
 if (x > 0 ){decMe2();
slide();}

    });
 });

//////






function runOnce(){
   if (x < friends.length){
          x++;     document.getElementById('playScoreEval').value = x;
                 if (x < friends.length){setTimeout(function(){ autoslide()}, 3000);
       } }
}



function zeroOut(){
  // x+= -friends.length;
    x+= -bestfriendlength;
            document.getElementById('playScoreEval').value = x;
          setTimeout(function(){ slide()}, 3000);
}

function loopMe (){
    if (x < bestfriendlength){
          x++;     document.getElementById('playScoreEval').value = x;
                 setTimeout(function(){ slide()}, 3000);
       } else if (x == bestfriendlength){ 
     zeroOut();
         }
}