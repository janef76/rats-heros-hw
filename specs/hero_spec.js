const assert = require('assert');
const Hero = require('../hero.js');
const Task = require('../task.js');
const Food = require('../food.js');
const Rat = require('../rat.js');

describe('Hero', function() {

  let hero;
  let hero1;
  let food;
  let task1;
  let task2;
  let tasks;
  let rat;

  beforeEach(function() {
    task1 = new Task ('Hard', 1, 10, false);
    task2 = new Task ('Easy', 5, 2, false);
    task3 = new Task ('Med', 3, 4, false);
    tasks = [task1, task2, task3];
    food = new Food ('Banana', 4, false);
    hero = new Hero ('Batman', 20, 'apple');
    hero1 = new Hero ('Banana Man', 30, 'Banana');
    rat = new Rat ('Ratty');
  });

  it('Should have a name', function() {
    const result = hero.name;
    assert.strictEqual(result, 'Batman');
  });

  it('Should have a health value', function() {
    assert.strictEqual(hero.health, 20);
  });

  it('Should have food', function() {
    assert.strictEqual(hero.favFood, 'apple');
  });

  it('Should have food2', function() {
    assert.strictEqual(hero1.favFood, 'Banana');
  });

  it('Should be able to talk', function() {
    assert.strictEqual(hero.canTalk(),'My name is: Batman');
  });

  it('Should start with no tasks', function() {
    assert.strictEqual(hero.tasks.length, 0);
  });

  it('Should be able to add tasks', function() {
    hero.addTask(task1);
    hero.addTask(task2);
    assert.strictEqual(hero.tasks.length, 2);
  })

  it('Should be able to eat food and increase health value', function() {
    assert.strictEqual(hero.canEat(food), 24);
  })

  it('Should be able to eat favorite food increasing by 1.5', function() {
    assert.strictEqual(hero1.canEat(food), 36);
  })

  it('Should be able to sort by urgency', function() {
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    assert.deepStrictEqual(hero.sortUrgency('urgency'), [task1, task3, task2]);
  })

  it('Should be able to sort by reward', function() {
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    assert.deepStrictEqual(hero.sortUrgency('reward'), [task2, task3, task1]);
  })

  it('Should be able to view tasks completed', function() {
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    task1.markCompleted(task1);
    assert.deepStrictEqual(hero.showComplete(true), [task1]);
  })

  it('Should only show tasks not completed', function() {
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    task1.markCompleted(task1);
    assert.deepStrictEqual(hero.showComplete(false), [task2, task3]);
  })

  it('Should reduce health points if eats poisonous food', function() {
    rat.touchFood(food);
    assert.strictEqual(hero.reduceHealth(food), 12);
  })

})
