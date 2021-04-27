/*git */
/*----global variables----*/

// interface mode change
const body = document.querySelector('body');
const dark_mode_toggle_btn = document.getElementById("dark-mode-toggle");

// screen and operations_string
var char = '';
var str_n = '';
var text = document.querySelector('p.consol1');

// operands and operators
var nums_and_symbols = [];

var current_operand = [];
var parsed_operands = [];
var first_operand = [];
var second_operand = [];
var third_operand = [];

var operators_index = [];
var operators_in_string = [];
var current_operator = [];
var first_operator = '';
var second_operator = '';

var loop_int = 0;
var operand = '';
var num1 = "";
var num2 = "";
var num3 = "";
var op1 = "";
var op2 = "";
var pri = ""

// operators array management (removing unnecessary operators('.','='))
var operators = [];
document.querySelectorAll("ul li.oper").forEach(function(elem){
    operators.push(elem.innerText)
})
operators.splice(operators.indexOf('.'), operators.indexOf('.') + 1);
operators.splice(operators.indexOf('='), operators.indexOf('=') + 1);

// count and loop_start for operations_string management
var count = 0;
var loop_start = undefined;

/*----functions----*/

// dark-mode
function darkModeToggle() {
 
    body.classList.toggle("dark-mode");

}

// capturing-operations
function write(event){
 
    if(str_n.length<=10){

        char = event.target;
        str_n = str_n + char.innerText;

    }else{

        char = event.target;
        str_n = str_n + char.innerText;
        text.style.fontSize="30px";

        if(str_n.length=20){

        end.innerText='Game over';
        end.style.fontSize="30px";

        }

    }
    
    text.innerText = str_n

}

// operations_string management
function stringManagement(){

    //console.log("str_n.length =", str_n.length);
    console.log("loop_int = ",loop_int);

    // filling nums_and_symbols with the whole operations_string
    // and gathering all the operators_index_positions
    for(let i=0; i<str_n.length; i++){
        
        nums_and_symbols.push(str_n[i]);
        if (str_n[i] == operators.find(element => element == str_n[i])){
            
            operators_index.push(i)
        
        }

    }

    console.log("nums_and_symbols = ", nums_and_symbols);
    console.log("operators_index = ", operators_index);

    // gathering operands and operators
    for(let i=0; i<str_n.length; i++){   
   
        console.log("1st cl current_operand = ", current_operand);
        console.log("1st cl current_operator = ", current_operator);
        
        // clearing current_operand and current_operator
        current_operand.splice(0,current_operand.length);
        current_operator.splice(0, current_operator.length);

        // filling current_opreand and current_operator again
        // and parsing operand before storage in parsed_operand
        if(operators_index.length === 1){

            nums_and_symbols.splice(0, operators_index[i]).forEach(function(elem){
                current_operand.push(elem);
                });
            nums_and_symbols.splice(0, 1).forEach(function(elem){
                current_operator.push(elem);
                });
            break;

        }else if(operators_index[i+1]!== NaN){

            nums_and_symbols.splice(operators_index[i], operators_index[i+1] - operators_index[i]).forEach(function(elem){
                current_operand.push(elem);
                });
            nums_and_symbols.splice(operators_index[i], 1).forEach(function(elem){
                current_operator.push(elem);
                });
            break;

        }

    }

    for(let l=0; l<current_operand.length; l++){

        if(current_operand[l] == operators.find(element => element == current_operand[l])){
            
            l+=1;

        }
        console.log("current_operand[l] = ", current_operand[l]);
        operand = operand + current_operand[l];

    }

    console.log("operand = ", operand);
    console.log("current_operator =", current_operator);
    
    parsed_operands.push(parseFloat(operand));
    operators_in_string.push(current_operator.pop());
    
    //clearing operand string
    operand = '';

    //console.log("2nd cl current_operand = ", current_operand);
    //console.log("2nd cl current_operator = ", current_operator);
    console.log("operators = ", operators_in_string);
    console.log("parsed_operands = ", parsed_operands);

    //clearing operators_index
    operators_index.splice(0, operators_index.length);

    //loop_int = str_n.length - (current_operator.length) + 1;

    
    //console.log("loop_int =", loop_int);
    //console.log("str_n.length =", str_n.length);
    console.log("current_operand.length =", current_operand.length);
    console.log("iter END")

}
        /*
        if(count === 0){

            current_operand.forEach(function(elem){
                first_operand.push(elem);
            });
            
            first_operator = current_operator.pop();

            count += 1;

        }else if(count === 1){

            current_operand.forEach(function(elem){
                second_operand.push(elem);
            });
            
            second_operator = current_operator.pop();
            

            count += 1;
        
        }else if(count === 2){

            current_operand.forEach(function(elem){
                third_operand.push(elem);
            });
            
            second_operator = current_operator.pop();

        }
        */


        //console.log("first_operand = ", first_operand);
        //console.log("first_operator = ", first_operator);
        //console.log("second_operand = ", second_operand);
        //console.log("second_operator = ", second_operator);
        //console.log(nums_and_symbols);
        //console.log("the count = ", count)
        //console.log("END")




// operations
function addition(op1, op2){

    return op1 + op2;

}

function substraction(op1, op2){

    if (op1 === undefined || op1 === ''){

        return inverseSign(op2);

    }else{

        return op1 - op2;

    }

}

function multiply(op1, op2){

    return op1 * op2;

}

function division(op1, op2){

    return op1 / op2;

}

function cancel(strn){

    return '';

}

function inverseSign(op){

    return op * -1;

}

function result(){

    /*TO DO*/

}

/*----event listeners----*/

// dark-mode
document.getElementById("dark-mode-toggle").addEventListener("click", darkModeToggle);

// number-keypad
document.getElementById('1').addEventListener('click',write);
document.getElementById('2').addEventListener('click',write);
document.getElementById('3').addEventListener('click',write);
document.getElementById('4').addEventListener('click',write);
document.getElementById('5').addEventListener('click',write);
document.getElementById('6').addEventListener('click',write);
document.getElementById('7').addEventListener('click',write);
document.getElementById('8').addEventListener('click',write);
document.getElementById('9').addEventListener('click',write);
document.getElementById('0').addEventListener('click',write);

// operators
document.getElementById('sum').addEventListener('click',write);
document.getElementById('sum').addEventListener('click',stringManagement);

document.getElementById('mult').addEventListener('click',write);
document.getElementById('mult').addEventListener('click',stringManagement);

document.getElementById('rest').addEventListener('click',write);
document.getElementById('rest').addEventListener('click',stringManagement);

document.getElementById('dele').addEventListener('click',write);
document.getElementById('inverse').addEventListener('click',write);
document.getElementById('per').addEventListener('click',write);

document.getElementById('div').addEventListener('click',write);
document.getElementById('div').addEventListener('click',stringManagement);

document.getElementById('float').addEventListener('click',write);

document.getElementById('equal').addEventListener('click',stringManagement);