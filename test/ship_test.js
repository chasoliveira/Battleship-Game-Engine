var expect = require('chai').expect;

describe('checkForShip', function () {
  var checkForShip = require('../game_logic/ship_methods').checkForShip;
  var player;

  before(function () {
    player = {
      ships: [
        { locations: [[0, 0], [0, 1]] },
        { locations: [[1, 0], [1, 1]] },
        { locations: [[2, 0], [2, 1], [2, 2], [2, 3]] }
      ]
    };
  });
  it('should correctly report no ship at a given players coordinates', function () {
    expect(checkForShip(player, [9, 9])).to.be.false;
  });

  it('should correctly report a ship located at the given players coordinates', function () {
    expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
  });

  it('should handle ships located more than one coordinates', function () {
    expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player, [9, 9])).to.be.false;
  });

  it('should handle checking multiple ships', function () {
    expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player, [1, 0])).to.deep.equal(player.ships[1]);
    expect(checkForShip(player, [1, 1])).to.deep.equal(player.ships[1]);
    expect(checkForShip(player, [2, 0])).to.deep.equal(player.ships[2]);
    expect(checkForShip(player, [2, 1])).to.deep.equal(player.ships[2]);
    expect(checkForShip(player, [2, 2])).to.deep.equal(player.ships[2]);
    expect(checkForShip(player, [2, 3])).to.deep.equal(player.ships[2]);
    expect(checkForShip(player, [9, 9])).to.be.false;
  });
});

describe('damageShip', function () {
  var demangeShip = require('../game_logic/ship_methods').demangeShip;
  it('should register demage on a given location', function () {
    var ship = {
      locations: [[0, 0]],
      demage: []
    };
    demangeShip(ship, [0, 0]);
    expect(ship.demage).to.not.be.empty;
    expect(ship.demage[0]).to.deep.equal([0, 0]);
  });
});

describe('fire', function () {
  var fire = require('../game_logic/ship_methods').fire;
  var player;

  beforeEach(function () {
    player = {
      ships: [
        {
          locations: [[0, 0]],
          demage: []
        }
      ]
    }
  });

  after(function () {
    console.log('entire test suite completed!')
  });

  afterEach(function () {
    console.log('one unit test completed!')
  });

  it('should record demage on the give players ship at a give corrdinate', function () {
    fire(player, [0, 0]);
    expect(player.ships[0].demage[0]).to.deep.equal([0, 0]);
  });

  it('should not record demage if there no ship at my coordinates', function () {
    fire(player, [9, 9]);
    expect(player.ships[0].demage).to.be.empty;
  });
});