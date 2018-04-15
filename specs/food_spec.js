const assert = require('assert');
const Food = require('../food.js');

describe('Food', function() {

  let food;

  beforeEach(function() {
    food = new Food ('Banana', 5)
  });

  it('Should have a name', function() {
    assert.strictEqual(food.name, 'Banana');
  });

  it('Should have a replenishment value', function() {
    assert.strictEqual(food.replenishmentValue, 5);
  });

  it('Should not be poisonous', function() {
    assert.strictEqual(food.poisonous, false);
  });

  it('Should be poisonous', function() {
    food.makePoisonous(food);
    assert.strictEqual(food.poisonous, true);
  });

})
