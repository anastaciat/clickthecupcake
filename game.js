//object for our game items
var items = {};
items.topic = "";
items.clicks = 0;


//on page load, this runs one time.
$(document).ready(function(){
  // localstorage
  if (typeof(Storage) !== "undefined") {
  	// Code for localStorage
  	console.log("Viskas gerai");
    
  	if (localStorage.topic) {
  	  //already exists, second loading of the game
      $('#content p').show();
  	  $('#clicker').show();

  		//Retrieve all variables
  		items.topic = localStorage.topic;
  		items.clicks = localStorage.clicks;
  		
  	} else {
  		// first loading of the game

  		// prompt for topic of your thesis
  		var topic = prompt("First, you need to name your cupcake. What is your cupcake's name?",'');
  		localStorage.setItem("topic", topic);
  		items.topic = topic;
  		$('#topic').text("Your cupcake's name is " + items.topic).show();
  		
		  //fade in messages
  		$('#content .one').delay(1000).fadeIn(1000);
  		$('#clicker').delay(2000).fadeIn(1000);
  		
  	}
  	      // Put variables into the page
  	  $('#topic').text("Your cupcake's name is " + items.topic);
  	  $('#clicks-status').text(items.clicks);
  	  
  } else {
    // Sorry! No Web Storage support..
    console.log("No localStorage support!");
  }
  //end localstorage
});

//Game functions; these run when buttons are clicked, or when they're used in the document.ready or window.setInterval sections
function increment(item){
  var current_clicks = '#' + item.name + "-status";

  //use item.name to refer to an item in the items array
  items[item.name] = Number(items[item.name]) + 1;

  //update the text on page with the new quantity
  $(current_clicks).text(items[item.name]);
  
    $("button img").animate({
opacity: '0.5',
  }).delay(20).animate({
opacity: '1',
  });
}

function save(){
  localStorage.setItem("clicks", items.clicks);
  console.log("Saving");
  
  $('#saving-status-2').fadeIn(500).delay(4000).fadeOut(500);
}

  //game loop; this runs every ten seconds to do things in the game
window.setInterval(function(){

    //You would add things here to check for new things to do, probably; all of the 'events' in your game would be triggered here
    console.log("In the game loop");
	$(".animation1").animate({
height: '45%',
width: '45%'
  }).delay(200).animate({
height: '40%',
width: '40%'
  });
  
  $(".animation2").animate({
height: '75%',
width: '75%'
  }).delay(200).animate({
height: '70%',
width: '70%'
  });

  	save();
}, 1000); //updates once per second (1000 milliseconds)