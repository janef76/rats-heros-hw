const assert = require('assert');
const Hero = require('../hero.js');
const Task = require('../task.js');

describe('Hero', function() {

  let hero;
  let task1;
  let task2;
  let tasks;

  beforeEach(function() {
    task1 = new Task ('Hard', 5, 10, false);
    task2 = new Task ('Easy', 1, 2, false);
    tasks = [task1, task2];
    hero = new Hero ('Batman', 20, 'apple')
  });

  it('Should have a name', function() {
    const result = hero.name;
    assert.strictEqual(result, 'Batman');
  });

  it('Should have a health value', function() {
    assert.strictEqual(hero.health, 20);
  });

  it('Should have food', function() {
    assert.strictEqual(hero.food, 'apple');
  });

  it('Should be able to talk', function() {
    assert.strictEqual(hero.canTalk(),'My name is: Batman');
  });

  it('Should start with no tasks', function() {
    assert.strictEqual(0, hero.tasks.length);
  });

  it('Should be able to add tasks', function() {
    hero.addTask(task1);
    hero.addTask(task2);
    assert.strictEqual(2, hero.tasks.length);
  })

})
