const Coordinate = require('./Coordinate.js');
const Grid = require('./Grid.js');
const Event = require('./Event.js');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Please input coordinates \n> '
});

//Initialize coordinate system
const grid = new Grid(10,10);

// //Prompts user to input location
rl.prompt();

//Basic error handling in case of wrong input
rl.on('line', (coordinates) => {
  let a=/-?\d{1,2},-?\d{1,2}/;              //RegEx to match 0 or 1 '-' followed by 1 or 2 digits followed by a ',' and then 0 or 1 '-' followed by 1 or 2 digits again
  const userX =  +coordinates.split(",")[0];
  const userY = +coordinates.split(",")[1];

  if (!coordinates.match(a)) {
    console.log("\nWrong format of entered coordinates!\n");
    rl.prompt();
  }
    else if (userX>grid.xSize || userY>grid.ySize || userX<-grid.xSize || userY<-grid.ySize){
        console.log("\nValue of one or more coordinates is outside of the coordinate grid!\n");
        rl.prompt();
      }
    else {
      console.log(`\nClosest Events to (${coordinates})\n`);
      var userCoordinates=0;

      //Use the user's input to find the Coordinate in the array
      for (i=0;i<grid.coordinates.length;i++){
        if (grid.coordinates[i].x === userX && grid.coordinates[i].y === userY) {
          userCoordinates=grid.coordinates[i];
          break;
        }
      }
      userCoordinates.closest(grid.coordinates,userCoordinates); //find closest 5 events (if there are that many available)
      rl.close();
    }
}).on('close', () => {
  process.exit(0);
});
