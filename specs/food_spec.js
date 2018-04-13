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
    assert.strictEqual(food.replenishment_value, 5);
  });
  
})
