// Constructor
function Event() {
  this.tickets = [];
  this.init();
}
var count=0; //class variable to count how many events have been created

//Initialization function that generates the data for the Events
Event.prototype.init = function(){
this.id=count;                             //set the id of the specific object to its respective number

for (k=0;k<Math.random()*10;k++){          //Random array of prices is generated for the Events
  this.tickets.push((Math.random()*100).toFixed(2));
}
count++;
}

// Finds the minimal price for the event
Event.prototype.findMin = function() {
  var min=this.tickets[0];

  if (min===undefined) return "No tickets available!"

  for (i=0;i<this.tickets.length;i++){
    if (min>this.tickets[i]) min=this.tickets[i];
  }
  return min;
}

// export the class
module.exports = Event;
