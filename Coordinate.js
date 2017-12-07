// Constructor
const Event = require('./Event.js');
function Coordinate(x, y) {
  this.x = x;
  this.y = y;
  this.init();
}

Coordinate.prototype.init = function(){
  if (Math.random()>0.5) {      //Only ~50% of the Coordinates contain Events (change that by modifying the value)
    this.event = new Event();
}
}

//Calculate Manhattan distance between two Coordinates
Coordinate.prototype.distance = function(c2){
  return Math.abs(this.x - c2.x) + Math.abs(this.y - c2.y);
}

//Return closest 5 events (or as many as available)
Coordinate.prototype.closest = function(array,a){
  let count=0;
  let eventsArray=[];            //create a new array to hold only Coordinates with Events

  for (i=0;i<array.length;i++) {
    if (array[i].event!==undefined) eventsArray.push(array[i]);
  }
  eventsArray = mergeSort(eventsArray, this); //sort array based on closest events

  var j=0;
  var returnList=[];
  //avoids crashes when less than 5 events
  while (j<5 && j<eventsArray.length){
      //console.log('Event' + eventsArray[j].event.id + ' - $' +eventsArray[j].event.findMin() + ', Distance ' +a.distance(eventsArray[j]));  // Prints clcosest events  (N.B could return an array if needed but unnecessary)
      returnList.push('Event' + eventsArray[j].event.id + ' - $' +eventsArray[j].event.findMin() + ', Distance ' +a.distance(eventsArray[j]));
      j++;
  }
  return returnList;
}


// MergeSort helper function
  function mergeSort(array, coordinate) {
    if (array.length < 2) return array;

    var middle = parseInt(array.length / 2);
    var left   = array.slice(0, middle);
    var right  = array.slice(middle, array.length);

    return merge(mergeSort(left,coordinate), mergeSort(right,coordinate), coordinate);
  }

  function merge(left, right, coordinate) {
    var merged = [];

    while (left.length && right.length) {
      if (coordinate.distance(left[0]) <= coordinate.distance(right[0])) {
        merged.push(left.shift());
      }
      else {
        merged.push(right.shift());
      }
    }

    while (left.length) {
      merged.push(left.shift());
    }
    while (right.length) {
      merged.push(right.shift());
    }
    return merged;
  }

// export the class
module.exports = Coordinate;
