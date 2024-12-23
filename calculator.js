const prompt=require("prompt-sync")()


const num1=inputOperand("One");
const num2=inputOperand("Two");



const operator=prompt("Enter the symbol of operation you want to perform: ")
let result;
let valid=true;
switch(operator){
    case"+":
        result=num1+num2;
        break;
    case"-":
        result=num1-num2;
        break;
    case"*":
        result=num1*num2;
        break;
    case"/":
        if(num2==0){
            valid=false
            console.log("Zero Division Error.")
        }
        else{
            result=num1/num2;
        }
        break;
    case "^":
        result=num1**num2;
        break;
    case"%":
        result=num1%num2;
        break;
    default:
        console.log("Invalid Symbol!")
        valid=false;

}
if(valid) 
    console.log(num1,operator,num2,"=",result)



function inputOperand(numberString){
    while(true){
        const number=parseFloat(prompt("Enter number "+ numberString+": "))
        if(isNaN(number)){
            console.log("Invalid input")
        }
        else{
            return number;
        }
    }
    
}