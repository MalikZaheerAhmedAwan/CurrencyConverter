#! /usr/bin/cnv node 

import inquirer from "inquirer";

const currency : any = {USD : 0.0036,EUR : 0.0034,GBP : 0.0029, AED : 0.013, TRY: 0.12,SAR : 0.014,PKR : 1};

let repeat=true;
while (repeat==true) 
{
console.log("\n****** Currency Converter *****");
//console.log("\n****** Based on PKR *****");

let answers = await inquirer.prompt([{name:"from",type:"list", choices: ["USD","EUR","GBP","AED","TRY","SAR","PKR"],message:"Select Currency Transfer From : "},
{name:"to",type:"list", choices: ["USD","EUR","GBP","AED","TRY","SAR","PKR"],message:"Select Currency Transfer To : "},
{name:"amt",type:"number", message:"Enter Amount to transfer : "}
]);

let fromAmount =currency[answers.from];
let toAmount =currency[answers.to];
let amount=answers.amt;
let baseAmount=amount/fromAmount;
let convertedAmount=baseAmount*toAmount;

console.log(`Your Amount ${answers.from} ${amount} converted into ${answers.to} ${convertedAmount} `);

let ans = await inquirer.prompt([{name:"isContinue",type:"confirm",message:"Do You Want to Contine ...... (y/n): ",
default:"true"}
]);
repeat=ans.isContinue;
} 