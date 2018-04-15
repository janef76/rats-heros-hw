const Hero = function(name, health, favFood, talk, tasks) {
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.tasks = [];
}

Hero.prototype.canTalk = function () {
  return (`My name is: ${this.name}`)
}

Hero.prototype.addTask = function (task) {
  this.tasks.push(task);
}

Hero.prototype.canEat = function (food) {
  if(this.favFood === food.name) {
    return this.health += food.replenishmentValue * 1.5;
  } else {
    return this.health += food.replenishmentValue;
  };
};

Hero.prototype.sortUrgency = function(valueToSort) {
  return this.tasks.sort(function(a, b) {
    return a[valueToSort] - b[valueToSort];
  });
}

Hero.prototype.showComplete = function (complete) {
  return this.tasks.filter((task) => task.completed === complete);
};

Hero.prototype.reduceHealth = function (food) {
  return this.health -= food.replenishmentValue * 2;
}

module.exports = Hero;
