let input = document.getElementById('inputBox');
let buttons =document.querySelectorAll('button');
let string="";
let arr=Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML == '='){
            string=eval(string);
            input.value=string;
        }

        else if(e.target.innerHTML== 'AC'){
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML=='DEL'){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else{
        string+=e.target.innerHTML;
        input.value=string;
        }
    })
})
function calculate(expression) {
    const numbers = expression.split(/[\+\-\*\/]/).map(Number);
    const operators = expression.split(/[0-9]+/).filter(op => op !== "");

    let result = numbers[0];
    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === '*') {
            result *= numbers[i + 1];
        } else if (operators[i] === '/') {
            if (numbers[i + 1] === 0) throw new Error("Division by zero");
            result /= numbers[i + 1];
        }else if (operators[i] === '%') {
            if (numbers[i + 1] === 0) throw new Error("Division by zero");
            result %= numbers[i + 1];
        }
    }

    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === '+') {
            result += numbers[i + 1];
        } else if (operators[i] === '-') {
            result -= numbers[i + 1];
        }
    }

    return result;
}
