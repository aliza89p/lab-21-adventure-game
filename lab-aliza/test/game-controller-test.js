'use strict';

describe('testing GameController', function(){
  beforeEach(() => {
    angular.mock.module('gameApp');
    angular.mock.inject(($controller) => {
      this.gameCtrl = $controller('GameController');
    });
  });
  beforeEach(() => {
    this.gameCtrl.history = [];
    this.gameCtrl.player = {
      location: 'kitchen',
      backpack: ['snickers']
    };
  });

  it('the player should change locations', () => {
    this.gameCtrl.moveDirection('east');
    expect(this.gameCtrl.player.location).toBe('livingRoom');
    expect(this.gameCtrl.history[0].text).toContain('You have entered livingRoom');
    expect(this.gameCtrl.history[0].text).toContain('Candy?');
  });

  it('the player should hit a wall', () => {
    this.gameCtrl.moveDirection('south');
    expect(this.gameCtrl.player.location).toBe('kitchen');
    expect(this.gameCtrl.history[0].text).toBe('You hit a wall');
    expect(this.gameCtrl.history[0].text).not.toContain('Candy?');
  });
});
