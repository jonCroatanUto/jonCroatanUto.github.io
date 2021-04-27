/*git */
/*----global variables----*/

// interface mode change
const body = document.querySelector('body');
const dark_mode_toggle_btn = document.getElementById("dark-mode-toggle");

// screen and operations_string
var char = '';
var str_n = '';
var text = document.querySelector('p.consol1');
var error =document.querySelector(".input_err");
var histo = document.querySelector('p.his');
var hist = '';


// operands and operators
var nums_and_symbols = [];

var current_operand = [];
var parsed_operands = [];
var first_operand = [];
var second_operand = [];



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

// operators array management (removing unnecessary operators('.','=','C'))

var operators = [];//array con los operadores

document.querySelectorAll("ul li.oper").forEach(function(elem){
    operators.push(elem.innerText)
})
console.log(operators)
operators.splice(operators.indexOf('.'),  1);
operators.splice(operators.indexOf('='),  1);
operators.splice(operators.indexOf('C'), 1);

/*----functions----*/

// dark-mode
function darkModeToggle() {
 
    body.classList.toggle("dark-mode");

}

// capturing-operations
function write(event){
 
    if(str_n.length<=11){

        char = event.target;
        str_n = str_n + char.innerText;
        hist = hist + char.innerText;

    }else if(str_n.length > 11 && str_n.length < 25){

        text.style.fontSize="30px";
        text.style.position="relative";
        text.style.top = "30px";
        char = event.target;
        str_n = str_n + char.innerText;
        hist = hist + char.innerText;
        

        }else{

            alert("no más inputs por favor");

        }

        let string_ops = [];
        let operators_index = [];

        for(let i=0; i<str_n.length; i++){
            
            string_ops.push(str_n[i]);

        }

        for(let j=0;j<string_ops.length;j++){

            if(string_ops[j]==operators.find(element => element== string_ops[j])){

                operators_index.push(j);

            }
        }

        /*if(operators_index.length > 1){

            error.style.fontSize = "20px";
            error.style.visibility = "visible";
            cancel();

        }
        
        for(let i=0; i<operators_index.length; i++){

            if(operators[i] + 1 === operators[i+1]){



            }

        }*/

        text.innerText = str_n;
        histo.innerHTML = hist;
   
}
var num = "";//string del operante
var op = "";//string del operador
var caracteres = []; //array de caracteres introd
 
var user_numbers=[]//array de los strings 'num'

var user_operators=[]//array de los strings 'op'

// operations_string management
function stringManagement(){

    //text.innerText=eval(str_n)
    
    var op_pos = [];//indice_posicion operadores
    var primer_numero = []; //array del primer operante
    var numero = [];//array de los siguientes operantes
    
    
    console.log(operators)
    
    
    
    
    for(i=0;i<str_n.length;i++){

        caracteres.push(str_n[i]);
    
    }
    
    for(i=0;i<caracteres.length;i++){
    
        if (caracteres[i]==operators.find( element => element == caracteres[i])){

            op_pos.push(i);
        
        }

    }
    console.log('index del operadors introduits',op_pos);
    
   
    
        for(e=0;e<op_pos.length;e++){
            
            if(e=0){

                primer_numero=caracteres.slice(0,op_pos[e]);
                
                primer_numero.forEach(function(elem){

                    num = num + elem;
                    user_numbers.push(num);
                    
                });
                
                primer_op=caracteres.slice(op_pos[e],1);
                
                primer_op.forEach(function(elem){
                    op=elem;
                    user_operators.push(op);
                });
                
            }else if(e+1===op_pos.length){
                num=''
                last_caracters=caracteres.length-op_pos[e]
                last_numero=caracteres.slice(op_pos[e],last_caracters);
                last_numero.forEach(function(elem){

                    num = num + elem;
                    user_numbers.push(num);
                    
                });
                last_oper=caracteres.slice(op_pos[e],1);
                last_oper.forEach(function(elem){

                    op = elem;
                    user_operators.push(op);
                    
                });

            }else{
                num=''
                
                caracteres_cogidos=numero.length+1+primer_numero.length+1;
                num_toTake=op_pos[e]-caracteres_cogidos;
                numero=[]
                numero=caracteres.slice(op_pos[e-1],num_toTake);

                
               /* total_extract=+act_extract; 
                console.log('valor del los primeros num',act_extract);
                console.log('total borrados',total_extract);
                x=op_pos[e]-(total_extract);*/
                
                
                numero.forEach(function(elem){
                    num = num + elem;
                        
                });
                user_numbers.push(num);

                
                primer_op=caracteres.splice(op_pos[e],1);
                primer_op.forEach(function(elem){
                    op=elem;
                    user_operators.push(op)
                });

                

            }
            

        }
        
    
    console.log('lista de numeros',user_numbers);
    console.log('lista de operadores',user_operators);
    console.log('lista de numeros',caracteres);

    
    /*primer_numero.forEach(function(elem){

        num1 = num1 + elem;
    });
    
    op=primer_oper[0];
    
    nums.forEach(function(elem){
        num2=num2+elem
    });


    
    switch (op) {
        
        case '+':
        
            result=parseFloat(num1)+parseFloat(num2);
            
            break;
        
        case '-':
        
            result=parseFloat(num1)-parseFloat(num2);
        
            break;
        case '*':
        
            result=parseFloat(num1)*parseFloat(num2);
            break;
        
        case '/':
        
            result=parseFloat(num1)/parseFloat(num2);
            break;
        
        
        case '%':
 
        result=parseFloat(num1)/parseFloat(num2)*100;
 
        break;
        
        default:

            text.style.fontSize='20px';
            text.innerText='Introduzca operantes y un operador';
            break;

        }

        if(result % 1!==0){

            text.innerText = result.toFixed(3);

        }else{

            text.innerText = result;

        }

    }*/

}

function cerrar(){
    if(document.querySelector('div.abrir').style.display==='none'){
        document.querySelector('main').style.display='none';
        document.querySelector('div.abrir').style.display='block';
    }
}
function abrir(){
    if(document.querySelector('div.abrir').style.display==='block'){
        document.querySelector('main').style.display='block';
        document.querySelector('div.abrir').style.display='none';
    }

}

function mini(){
    if(document.querySelector('section.keys').style.display==='none'){
        document.querySelector('section.keys').style.display='grid'
       } else{
        document.querySelector('section.keys').style.display='none'

       }
}

function fullsc(){
    console.log('el boton full funciona')
}

function his(){
    console.log(str_n)
    if(histo.style.display==='none'){

        histo.style.display='block';
        histo.style.fontSize='30px';
        text.style.visibility='hidden';

    }
}
// operations





function cancel(){

    str_n = '';
    text.innerText = str_n;

}

function inverseSign(){
     nu=str_n.toString()
    for(i=0;i<nu.length;i++){
       
        if(nu[i]=='+'){
            neg='seg';
            break
        }else{
            neg='pri';
        }
        
    }
    console.log(neg)

}

function result(){

    /*TO DO*/

}

/*----event listeners----*/

// dark-mode
document.getElementById("dark-mode-toggle").addEventListener("click", darkModeToggle);

//________________________ todos los botones de numero__________________________// 
 
numb_but=document.querySelectorAll('ul.li-numbers button')
 
 
numb_but.forEach(element => {
element.addEventListener('click',write)

}); 
//________________ todos los botones de operadores______________//



//________________ %,/______________// 
document.getElementById("per").addEventListener("click", write);
document.getElementById("div").addEventListener("click", write);

//________________ +,-,*,=______________// 
document.getElementById("sum").addEventListener("click", write);
document.getElementById("mult").addEventListener("click", write);
document.getElementById("rest").addEventListener("click", write);


//________________ Aqui he seleccionado el igual ______________// 

document.getElementById('equal').addEventListener('click',stringManagement);

//_______________ Aquí he seleccionado el C ________________//

document.getElementById('dele').addEventListener('click', cancel);

document.getElementById("inverse").addEventListener("click", inverseSign);

//___________________ Aqui he seleccionado los textos de la pantalla ______________________// 

var histo=document.querySelector('p.his')

var text=document.querySelector('p.consol1')

var end=document.querySelector('p.end')

//________________ con sus respectivo strings ______________// 

var str_n=''
var hist=''