const assert = require('assert');
const Task = require('../task.js');

describe('Task', function() {

  let task;

  beforeEach(function() {
    task = new Task ('Hard', 5, 10, false )
  });

  it('should have a difficulty', function() {
    assert.strictEqual(task.difficulty, 'Hard')
  });

  it('Should have an urgency', function() {
    assert.strictEqual(task.urgency, 5)
  });

  it('Should have a reward', function() {
    assert.strictEqual(task.completed, false)
  });

  it('Should be able to marked completed', function() {
    task.markCompleted(task)
    assert.strictEqual(task.completed, true)
  })

})
