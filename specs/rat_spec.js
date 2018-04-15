const assert = require('assert');
const Rat = require('../rat.js');
const Food = require('../food.js');

describe('Rat', function() {

  let rat;
  let food;

  beforeEach(function() {
    rat = new Rat ('Henry')
    food = new Food ('Banana', 5, false)
  });

  it('Should have a name', function() {
    assert.strictEqual(rat.name, 'Henry')
  });

  it('Should make food poisonous if rat touched it', function() {
    rat.touchFood(food);
    assert.strictEqual(food.poisonous, true)
  });
})
