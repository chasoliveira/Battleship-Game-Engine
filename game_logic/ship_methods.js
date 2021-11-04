function checkForShip(player, coordinates) {
  var shipPresent, ship;

  for (let i = 0; i < player.ships.length; i++) {
    ship = player.ships[i];
    shipPresent = ship.locations
      .filter(coord => coord[0] === coordinates[0]
        && coord[1] === coordinates[1])[0];

    if (shipPresent) return ship;
  }
  return false;
};

function demangeShip(ship, coordinates) {
  ship.demage.push(coordinates);
};

function fire(player, coordinates) {
  var ship = checkForShip(player, coordinates);
  if (ship)
    demangeShip(ship, coordinates);
};

function validateLocation(player, location) { };

module.exports.checkForShip = checkForShip;
module.exports.demangeShip = demangeShip;
module.exports.fire = fire;
module.exports.validateLocation = validateLocation;