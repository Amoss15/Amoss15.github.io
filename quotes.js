/*
   This script randomly generates quotes for the home page

*/

function randomInt(lowest, size) {  // generate random integer between 0 and 9
    return Math.floor(lowest + size*Math.random());
  }
  let randomQ = randomInt(0,4); // assigns random int to variable randomQ
  
  let quoteElem = document.getElementById("quote");
  quoteElem.innerHTML = getQuote(randomQ); // generates the random quote
  
  function getQuote(n) {
     let quotes = [
     "<p id='quotation'>" + "<q>Our first computers were born not out of greed or ego, but in the revolutionary spirit of helping common people rise above the most powerful institutions.</q>" + "</p>" + "<br>" + "<p id='name'>" + "- Steve Wozniak" + "</p>",
     "<p id='quotation'>" + "<q>It's the inspired student that continues to learn on their own. That's what separates the real achievers in the world from those who pedal along, finishing assignments.</q>" + "</p>" + "<br>" + "<p id='name'>" + "- Neil DeGrasse Tyson" + "</p>",
     "<p id='quotation'>" + "<q>As you enter positions of trust and power, dream a little before you think.</q>" + "</p>" + "<br>" + "<p id='name'>" + "- Toni Morrison" + "</p>",
     "<p id='quotation'>" + "<q>Be brave, be curious, be determined, overcome the odds. It can be done.</q>" + "</p>" + "<br>" + "<p id='name'>" + "- Stephen Hawking" + "</p>",
   ];
     
     return quotes[n];
  }
