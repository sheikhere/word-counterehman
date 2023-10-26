#!/usr/bin/env node
import chalk from "chalk";
import { count, paragraph } from "./function.js";



const greeting = chalk.hex('#FFA500'); // Orange color
console.log('\n');
console.log(greeting("\n\t\t 'WELCOME TO WORDS AND CHARACTERS COUNTER' "));


count(paragraph);

