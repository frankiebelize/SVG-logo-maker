const fs = require('fs');
const inquirer = require('inquirer');
const LogoGenerator = require('./generateLogo');
const { async } = require('rxjs');

async function main(){
   const userInput = await inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter the text for the logo [3 characters]',
    },
    {
        type: 'list',
        name: 'textColor',
        message: 'Select the color for the text',
        choices: ['red','green','blue','yellow','white','black'],
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape are you going to use for the logo',
        choices: ['circle','triangle','square'],
    },
    {
        type: 'list',
        name: 'shapeColor',
        message: 'Select the color for the Shape',
        choices: ['red','green','blue','yellow','white','black'],
    },
   ]);

   const logoGenerator = new LogoGenerator(userInput.text, userInput.textColor,userInput.shape,userInput.shapeColor)

   const svgContent = logoGenerator.generateLogo();

   const fileName= 'generated_logo.svg';
   fs.writeFileSync(fileName, svgContent);
   console.log('Logo generated and saved');
}

main();