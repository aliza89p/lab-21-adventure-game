'use strict';

const angular = require('angular');
const gameApp = angular.module('gameApp');

gameApp.controller('GameController', ['$log', GameController]);

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function GameController($log){
  this.history = [{id: 0, text: 'You are on a a candy adventure! Choose a direction to explore.'}];
  this.directions = ['north', 'east', 'south', 'west'];
  this.candy = ['kit kat', 'twix', 'jolly rancher', 'snickers'];
  this.player = {
    location: 'roomA',
    backpack: []
  };

  this.map = require('../lib/map.js');

  this.addItemToBackpack = function(number){
    if (number < 6){
      let newCandy = this.candy.pop();
      this.player.backpack.push(newCandy);
      return 'Candy? Yes! You got a ' + newCandy;
    }
    else return 'Candy? No! No candy for you!';
  };

  this.moveDirection = function(direction){
    $log.debug('gameCtrl.moveDirection');
    if (this.map[this.player.location]){
      let currentLocation = this.map[this.player.location];
      $log.log('currentLocation', currentLocation);
      let nextRoom = currentLocation[direction];
      $log.log('nextRoom', nextRoom);
      if (nextRoom != 'wall'){
        this.player.location = nextRoom;
        this.logHistory('You have entered ' + this.player.location + '. ' + this.addItemToBackpack(getRandomNumber(1, 10)));
        return;
      }
      this.logHistory('You hit a wall');
    }
  };

  this.logHistory = function(info){
    this.history.push({id: this.history.length, text: `${info}`});
  };

}
