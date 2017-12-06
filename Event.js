// Constructor
function Event(id, tickets) {
  this.id = id;
  this.tickets = tickets;
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
