'use strict';

class Pet {
  static all() {
    return [
      {
        name: 'Hosh',
        type: 'dog'
      },
      {
        name: 'Ian',
        type: 'cat'
      }
    ];
  }
}

module.exports = {
  Pet
};
