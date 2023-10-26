import { response } from "./input.js";
import chalk from "chalk";
export const paragraph = response.paragraph;
export function count(a) {
    let characterCountWithoutSpaces = 0;
    let wordCountWithoutSpaces = 0;
    let insideWord = false;
    for (let i = 0; i < a.length; i++) {
        let char = a[i];
        if (char !== ' ' && char !== '\t' && char !== '\n' && char !== '\r') {
            characterCountWithoutSpaces++;
            if (!insideWord) {
                wordCountWithoutSpaces++;
                insideWord = true;
            }
        }
        else {
            insideWord = false;
        }
    }
    console.log('\n');
    console.log(chalk.rgb(120, 90, 200).inverse("Total Character (excluding white spaces):"), characterCountWithoutSpaces);
    console.log('\n');
    console.log(chalk.rgb(160, 90, 120).inverse("Total Words (excluding white spaces):"), wordCountWithoutSpaces);
    console.log('\n');
}
