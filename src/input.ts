import inquirer from "inquirer";
import chalk from "chalk";

export let response = await inquirer.prompt([
    {
      type: 'input',
      name: 'paragraph',
      message: chalk.rgb(15, 190, 204).inverse("\nEnter an English paragraph: \n\n"),
    },
  ]);
