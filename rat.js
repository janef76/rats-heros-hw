const Rat = function(name) {
  this.name = name;
}

Rat.prototype.touchFood = function(food) {
  return food.makePoisonous();
}

module.exports = Rat;
