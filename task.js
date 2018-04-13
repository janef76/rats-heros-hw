const Task = function (difficulty, urgency, reward, completed) {
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.completed = false;
}

Task.prototype.markCompleted = function(task) {
  if(this.completed === false); {
    return this.completed = true;
  };
};

module.exports = Task;
