const Coordinate = require('./Coordinate.js');
const Event = require('./Event.js');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var grid = [];
var count=0;

//Initialize coordinate system
for (i = -1000; i < 1000; i++) {
  for (j = -1000; j < 1000; j++){
    if (Math.random()>0.98) {      //Only ~50% of the Coordinates contain Events
      var prices = [];
      for (k=0;k<Math.random()*10;k++){          //Random array of prices is generated for the Events
        prices.push((Math.random()*100).toFixed(2));
      }                          //use the number of the event as a unique ID
      grid.push(new Coordinate(i,j,new Event(count,prices)));
      count++;
  }
  else grid.push(new Coordinate(i,j));  //creates empty coordinate
}};

//Prompts user to input coordinates (N.B coordinates should be written in the form 1,2 )
rl.question('Please input coordinates ', (coordinates) => {
  const userCoordinates=new Coordinate(+coordinates.split(",")[0], +coordinates.split(",")[1])  //Use the user's input to create a new Coordinate object
  userCoordinates.closest(grid,userCoordinates); //finds closest 5 events (if there are that many available)
  rl.close(); // close input stream
});
