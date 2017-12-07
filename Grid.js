const Coordinate = require('./Coordinate.js');

// Constructor
function Grid(xSize, ySize) {
  this.xSize = xSize;
  this.ySize = ySize;
  this.coordinates = [];
  this.init();
}

//Initialization function that populates the coordinate system with coordinates.
Grid.prototype.init = function() {
  for (i = -this.xSize; i <= this.xSize; i++) {
    for (j = -this.ySize; j <= this.ySize; j++){
    this.coordinates.push(new Coordinate(i,j));
  }};
}

module.exports = Grid;
