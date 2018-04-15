const Food = function (name, replenishmentValue, poisonous) {
  this.name = name;
  this.replenishmentValue = replenishmentValue;
  this.poisonous = false;
}

Food.prototype.makePoisonous = function (rat) {
  if(this.poisonous === false) {
    return this.poisonous = true;
  };

};

module.exports = Food;
