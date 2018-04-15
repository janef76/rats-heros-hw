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
    return this.health += food.replenishment_value * 1.5;
  } else {
    return this.health += food.replenishment_value;
  };
};

Hero.prototype.sortUrgency = function(urgency) {
  return this.tasks.sort(function(a, b) {
    return a.urgency - b.urgency;
  });
}

Hero.prototype.showComplete = function (complete) {
  // const arrayOfTasks = this.tasks.filter((task) => {
  //   return task.completed === complete;
  // });
  // return arrayOfTasks;
  return this.tasks.filter((task) => task.completed === complete);
};

module.exports = Hero;
