'use strict';

module.exports = {
  bathroom: {
    north: 'wall',
    east: 'bedroom',
    south: 'kitchen',
    west: 'wall'
  },
  bedroom: {
    north: 'wall',
    east: 'wall',
    south: 'livingRoom',
    west: 'bathroom'
  },
  kitchen: {
    north: 'bathroom',
    east: 'livingRoom',
    south: 'wall',
    west: 'wall'
  },
  livingRoom: {
    north: 'bedroom',
    east: 'wall',
    south: 'wall',
    west: 'kitchen'
  }
};
