const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

console.log("Running app.js");

const fs = require("fs");

const todos = require("./todos.js");
const _ = require("lodash");
const yargs = require('yargs');

const args = yargs.argv;

clear();
console.log('You ran the command: ' + args._[0]);

console.log(
    chalk.bold.yellow(
      figlet.textSync('Do-it', { horizontalLayout: 'full' })
    )
  );

console.log(todos.addTodo()); 
