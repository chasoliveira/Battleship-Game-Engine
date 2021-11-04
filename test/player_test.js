var expect = require('chai').expect;

describe('PLAYER METHODS', function () {
  describe('validadeLocation', function () {
    var validadeLocation = require('../game_logic/ship_methods').validateLocation;
    var player;

    beforeEach(function () {
      player = {
        ships: [
          { locations: [[9, 9]] }
        ]
      };
    });

    it('should confirm valid for unocupied location in range', function () {
      var location = [0, 0];
      var actual = validadeLocation(player, location);
      expect(actual).to.be.false;
    });
  });
});