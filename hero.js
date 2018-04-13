const Hero = function(name, health, food, talk, tasks) {
  this.name = name;
  this.health = health;
  this.food = food;
  this.tasks = [];
}

Hero.prototype.canTalk = function () {
  return (`My name is: ${this.name}`)
};

Hero.prototype.addTask = function (task) {
  this.tasks.push(task);
}

module.exports = Hero;
