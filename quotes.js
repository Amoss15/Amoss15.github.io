/*
   This script randomly generates quotes for the home page

*/

function randomInt(lowest, size) {  // generate random integer between 0 and 9
    return Math.floor(lowest + size*Math.random());
  }
  var randomQ = randomInt(0,2); // assigns random int to variable randomQ
  
  var quoteElem = document.getElementById("quote");
  quoteElem.innerHTML = getQuote(randomQ); // generates the random quote
  
  function getQuote(n) {
     var quotes = [
     "<h1>" + "Our first computers were born not out of greed or ego, but in the revolutionary spirit of helping common people rise above the most powerful institutions." + "</h1>" + "<br>" + "<h3>" + "― Steve Wozniak" + '</h3>',
     "Testing.",
     ];
     
     return quotes[n];
  }