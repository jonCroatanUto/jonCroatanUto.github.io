

function ready(){
    
    document.addEventListener("DOMContentLoaded",read())
    function read() {
        document.querySelector('p.result').innerHTML='The DOM is Ready!';
    }
}
function clicked(){
        document.querySelector('.result').innerHTML='The button had been cliked';
     
}function dubl(){
   
    document.querySelector( ".run" ).addEventListener('dblclick',function() {
        document.querySelector('.result').innerHTML='You make the doble click!!';
    });
}function keyP(){
    $( ".run" ).text("press any key");
    document.onkeypress=function() {
        document.querySelector('.result').innerHTML='You press a key, good job!!';
    };
}function mousMv(){
    document.querySelector( ".run" ).innerHTML="mouve cursor";
    document.querySelector( ".showComandContent" ).onmousemove=function(event) {
        document.querySelector('.result').innerHTML='x: '+event.pageX+' , '+'y: '+event.pageY;
    };
}function textVal(){
    document.querySelector( ".run" ).innerHTML="Write below & click here";
    
    document.querySelector('.result').insertAdjacentHTML("beforeend",'<input type="text" class="inpText">');
        $('.run').off('click',textVal);
        $('.run').on('click',grapTx);
        function grapTx(){
            let texVal=document.querySelector( ".inpText" ).value;
            document.querySelector('.result').innerHTML=`You write: ${texVal}`;
        }
    
}function loadAction(){
    document.querySelector( ".run" ).innerHTML="Wait to image";
    document.querySelector('.result').insertAdjacentHTML("beforeend",'<img src="assets/ShinChan1.jpg" alt="chin chan" class="imag">');
    document.querySelector('.imag').onload=function() {
        document.querySelector('.run').innerHTML='Enjoy this image!';
    };
}function errAction(){
    document.querySelector('.result').insertAdjacentHTML("beforeend",'<img src="assets/scriptsNative.js" class="imatg">');
    document.querySelector( '.imatg').addEventListener('error',function() {
        $('.result').text('there is an error charging the image!');
    });
}
function iSubm(){
    document.querySelector( ".run" ).innerHTML="Click submit input below";
    document.querySelector('.result').insertAdjacentHTML("beforeend",'<form id="sub" action="" class="frm">');
    document.querySelector('.frm').insertAdjacentHTML("beforeend",'<input type="text" class="inpText">');
    document.querySelector('.frm').insertAdjacentHTML("beforeend",'<input type="submit" class="submitInput">');
    
    document.querySelector('.submitInput').addEventListener('submit',summm)
    
    function summm(event) {
        event.preventDefault();
        
       // let texVal=querySelector(".inpText").value;
       // document.querySelector('.result').innerHTML=` ${texVal}`;
        document.querySelector( ".run" ).innerHTML="You already submit this text:";
        
    };
}
function isChange(){
    
    document.querySelector('.result').insertAdjacentHTML("beforeend","<select class='sOptions'><option class='Options'> option 1</option><option class='Options'> option 2</option></select>");
    
    document.querySelector('.sOptions').onchange=function() {
        
        document.querySelector('.result').innerHTML='option changed';
    };
}
function isOver(){
    document.querySelector( ".run" ).innerHTML="put the cursor over the sphere";
    document.querySelector('.result').insertAdjacentHTML("beforeend","<div class='circle'></div>");
    let x=2;
    let y=2;
    document.querySelector('.circle').onmouseover=function() {
        
       
        $('.showComandContent').prepend('<p class="text">you are on</p>');
        console.log('llega')
        $('.text').css('transform',`translate(${x}px,${y}px)`);
        $('.text').css('transform',`scale(${x/2},${y/2})`);
        console.log('akitmb')
        x+=Math.random()*(-10);
        y+=Math.random()*10;
    };
}
function isCliked(){
    document.querySelector( ".run" ).innerHTML="click checkbox below";
    document.querySelector('.result').insertAdjacentHTML("beforeend","<input id='but' type='checkbox'>Check that");
    document.querySelector('.result').style.fontSize='40px';
    document.querySelector('#but').style.width='40px';
    document.querySelector('#but').style.height='40px';
    document.querySelector('#but').addEventListener('click',chk);
    function chk(){
        if(document.querySelector('#but').checked=true){
        
            document.querySelector('.result').innerHTML='God job you checked!!';
        } 
    }
}
function selectOpt(){
    document.querySelector(".run" ).innerHTML="click an element of the list";
    document.querySelector('.result').insertAdjacentHTML("beforeend","<ul class=list><li>hello</li><li>bye bye</li></ul>");
    document.querySelector('ul').style.fontSize='25px';
    document.querySelectorAll('ul.list li').forEach(function(elem) {
        elem.addEventListener('click',function(event){
            let sele=event.target;
            
            document.querySelector('.result').innerHTML= sele.textContent;
            
            //document.querySelector('.run').removeEventListener('click',selectOpt);
           
        });
        
    });
}
function inElement(){
    
    let myDiv=document.createElement("div");
    myDiv.textContent='soy un div';
    myDiv.style.backgroundColor='yellow';
    myDiv.style.color='black'
    $('.result').append(myDiv)

    
   
}
function killElement(){
    document.querySelector( ".run" ).textContent="remove the text below ";
    document.querySelector('.result').textContent="hi I,m a text";
    document.querySelector(".run").addEventListener('click',function() {
        document.querySelector('.result').remove();
    });
}
function newLastCh(){
    document.querySelector( ".run" ).textContent="apend in this box";
    document.querySelector(".run").insertAdjacentHTML("beforeend","<p>Congratulations you added a text</p>");
   
}
function newFirstCh(){
    document.querySelector( ".run" ).textContent="prepend in this box";
    document.querySelector(".run").insertAdjacentHTML("afterbegin",'<p>Congratulations you preadded a text</p>');
}
function elementAfter(){
    document.querySelector( ".run" ).textContent="create after this button";
    document.querySelector(".run").insertAdjacentHTML("afterend","<p>Congratulations crate this</p>");
}
function elementBefore(){
    document.querySelector( ".run" ).textContent="create before this button";
    document.querySelector(".run").insertAdjacentHTML("beforebegin","<p>Congratulations crate this</p>");
}
function colantion(){
    document.querySelector( ".run" ).textContent="clone me please!!";
    
    document.querySelector('.result').appendChild(document.querySelector('.run').cloneNode(true));
}
function addingClass(){
    document.querySelector( ".run" ).textContent="add a class to the p element below";
    document.querySelector('.result').textContent="<p class='result'>I need a new class</p>";
    
    document.querySelector('.run').addEventListener('click', function(){
        document.querySelector('.result').classList.add('newClass');
        document.querySelector('.newClass').textContent="<p class='result newClass'>thanks</p>";
    })
}
function removingClass(){
    document.querySelector('.result').classList.add('newClass');
    document.querySelector( ".run" ).textContent="remove the newClass";
    document.querySelector('.result').textContent="<p class='result newClass'>to many classse ,plese remove one</p>";
    
    document.querySelector('.run').addEventListener('click', function(){
        document.querySelector('.result').classList.remove('newClass')
        document.querySelector('.result').textContent="<p class='result'>thanks</p>";
    })
}
function toggClass(){
    $('.result').attr('id','newId');
    document.querySelector( ".run" ).textContent="active and deactive the result class";
    document.querySelector('.result').textContent="The class is activate";
    
    document.querySelector('.run').addEventListener('click', function(){
        
        document.querySelector('#newId').classList.toggle('result');
        document.querySelector('#newId').textContent="deactivate";
    })
}
function newAtribute(){
    document.querySelector( ".run" ).textContent="Disable me!!";
    document.querySelector('.result').textContent="Disable him";
    document.querySelector('.run').setAttribute("disabled",true)
   if($('.run:disabled')){
    document.querySelector( ".run" ).textContent="¡¡¡oh,no you disabled me!!!!";
    document.querySelector('.result').textContent="The input is disabled";
    document.querySelector('.run').style.backgroundColor='grey';
    document.querySelector('.result').insertAdjacentHTML("beforeend","<button class='run' id='newbut'>Make the button able here!!!,come on!!</button>");
    document.querySelector( "#newbut" ).style.backgroundColor='red';
    document.querySelector( "#newbut" ).addEventListener('click',function(){
        document.querySelector('.run').style.backgroundColor='black';
        document.querySelector('.run').setAttribute("disabled",false);
        document.querySelector( ".run" ).textContent="Disable me!!";
        document.querySelector('.result').textContent="Disable him";
        })
    }
}
function dataSrc(){
    document.querySelector('.result').classList.add('newClass');
    document.querySelector( ".run" ).textContent="add an image with data-src";
    document.querySelector('.result').insertAdjacentHTML("beforeend",'<img src="assets/ShinChan1.jpg" alt="chin chan" class="imag">');
    document.querySelector('.imag').setAttribute("data-src","I'm data");
    document.querySelector('.result').insertAdjacentHTML("beforeend",'<p></p>');
    document.querySelector('.result p').textContent='<img src="assets/ShinChan1.jpg" alt="chin chan" class="imag" data-src="I,m data">';
    document.querySelector( ".run" ).textContent="remove data-src";
    document.querySelector( ".run" ).addEventListener("click",function(){
        $('.result').empty();
        document.querySelector('.result').insertAdjacentHTML("beforeend",'<img src="assets/ShinChan1.jpg" alt="chin chan" class="imag">');
        document.querySelector('.result').insertAdjacentHTML("beforeend",'<p></p>');    
        document.querySelector('.result p').textContent='<img src="assets/ShinChan1.jpg" alt="chin chan" class="imag">';
        document.querySelector('.imag').removeAttribute('data-src');
        document.querySelector( ".run" ).textContent="data-src have been removed";
    });
   
}

function noShow(){
    document.querySelector( ".run" ).textContent="hide the text";
    document.querySelector('.result').textContent="Come on hide me!!!";
    document.querySelector( '.run').addEventListener('click',function() {
        document.querySelector('.result').style.display='none';
        document.querySelector( ".run" ).textContent="The text have been hidden,show it!!";
        document.querySelector( '.run').addEventListener('click',function(){
            
            document.querySelector( ".run" ).textContent="Here we have again";
            document.querySelector('.result').style.display='block';
        })
    });
}

function opacityUp(){
    document.querySelector( ".run" ).textContent="Say no Hello!!!";
    document.querySelector('.result').textContent="HOLA";
    document.querySelector( ".run" ).addEventListener("click",function(){
        document.querySelector( ".run" ).textContent=" naw Say HeLLooo !!!";
        document.querySelector('.result').style.opacity='0';
        document.querySelector('.result').style.transition='0.5s';
        document.querySelector( ".run" ).addEventListener("click",function(){
            document.querySelector( ".run" ).textContent="Say HeLLooo!!!";
            document.querySelector('.result').style.opacity='1';
            document.querySelector('.result').style.transition='0.5s';
        })
    });
}

function runArray(){
    document.querySelector( ".run" ).textContent="Send the items in the list";
    document.querySelector('.result').insertAdjacentHTML("beforeend","<ul><li>hola</li> <li>ketal?</li> <li>estaís?</li> </ul><button id='lis' class='run'>change tyles</button>");
    document.querySelector( "#lis" ).addEventListener("click",function(){
        document.querySelectorAll('.result li').forEach(function(elem){
            elem.style.fontWeight='400';
            elem.style.color='red';
        })
    });
   
}
function papaNode(){
    document.querySelector(".run").textContent="Get the my parent";
    document.querySelector('.result').textContent="Its also mine";
    document.querySelector('.run').addEventListener('click',function() {
        console.log(document.querySelector('.run').parentNode)
        document.querySelector('.run').textContent='The console.log show: ';
        document.querySelector('.result').textContent='div.showComandContent';
        document.querySelector('.result').style.color='violet';
    });        
}
function sonNode(){
    document.querySelector(".run").textContent="Get me and my brothers";
    document.querySelector('.result').textContent="Its also mine";
    document.querySelector('.run').addEventListener('click',function() {
        console.log(document.querySelector('.showComandContent').childNodes)
        document.querySelector('.run').textContent='The console.log show: ';
        document.querySelector('.result').textContent='div.t1, div.vanillaBox, div.jQueryBox, button.ejempleButJq, button.run, button.ejempleButVani, p.result';
        document.querySelector('.result').style.color='violet';
        document.querySelector('.result').style.fontSize='15px';
    });
}
function clssN(){
    document.querySelector(".run").textContent="Get al the elements with the class: specificEvent";
    document.querySelector('.run').addEventListener('click',function() {
        document.querySelectorAll('.specificEvent').style.color='yellow';
       
        document.querySelector('.run').textContent='Good job!!';
        document.querySelector('.result').textContent='Now check the Events descriptions';
        
    });
    
}
function idN(){
    document.querySelector(".run").textContent="Get al the element with the iD: tiitle";
    document.querySelector('.run').addEventListener('click',function() {
        document.querySelector('#tiitle').style.fontWeight='100';
        document.querySelector('#tiitle').style.color='yellow';
        document.querySelector('.run').textContent='Good job!!';
        document.querySelector('.result').textContent='Now check the Title of the web';
        
    });

}
function classNone(){
    document.querySelector('.jsclas').style.display='none'
    document.querySelector(".run").textContent="change display none elements";
    
    document.querySelector('.result').insertAdjacentHTML("beforeend",'<button class="run" id="but">show the title and change styles</button>');
    document.querySelector('#but').addEventListener('click',function(){
    if(document.querySelector('.jsclas').style.display='none'){

        document.querySelector('.jsclas').style.display='block';
        document.querySelector('.jsclas').style.color='yellow';
        document.querySelector('.jsclas').style.fontWeight='700';

            }
    });
    
   
}
function selecD(){
    document.querySelector(".run").textContent="Get me and my brothers";
    
    document.querySelector('.result').insertAdjacentHTML("beforeend","<select class='sOptions'><option class='Options'>goode morning</option><option class='Options'>good night</option><option class='Options'>I,m finally crazy?</option><option class='Options'> How long?</option></select>");
    document.querySelector('.result').insertAdjacentHTML("beforeend",'<button class="run" id="but">Witch I selected ? </button>')
    document.querySelector("#but").addEventListener('click',function(){
       let optins= document.querySelectorAll('.Options')
       optins.forEach(function(elem){
           if(elem.selected == true){
            document.querySelector('.result').textContent=elem.textContent;
           }
       })
        
        $(".run").off('click');
    });
}
function aHref(){
    document.querySelector(".run").textContent="Get me and my brothers";
    document.querySelector('.result').append("<a>hola</a>");
    document.querySelector('.result').append("<a>ketal?</a>");
    document.querySelector('.result').append("<a>estaís?</a>");
    document.querySelector('.result').append("<button id='lis' class='run'>change the color and url of the first</button>");
    document.querySelector('.result a').attr('href','https://images-na.ssl-images-amazon.com/images/I/81EOy3o-eJL.jpg')
    document.querySelector('#lis').on('click',function(){
        document.querySelector('.result a:first-child').attr('href','https://www.google.com/imgres?imgurl=https%3A%2F%2Fthehighdefinitionwallpapers.com%2Fwp-content%2Fuploads%2F2020%2F02%2FNaturalFlowerNatural-Orange-butterfly-on-yellow-flowers-nice-background.jpg&imgrefurl=https%3A%2F%2Fthehighdefinitionwallpapers.com%2Fnatural-orange-butterfly-on-yellow-flowers-nice-background%2F&tbnid=U1D1C3OEPpzqQM&vet=12ahUKEwjt3ZaV_JnwAhUS04UKHYjtCQoQMygdegUIARDNAg..i&docid=qUF1M32c321_gM&w=1920&h=1200&q=flowers%20nice&ved=2ahUKEwjt3ZaV_JnwAhUS04UKHYjtCQoQMygdegUIARDNAg')
        document.querySelector('.result a:first-child').css('color','yellow')
        document.querySelector(".run").off('click')
    })

}
function frst(){
    $(".run").text("Get me and my brothers");
    $('.result').text("Its also mine");
  
}
function killThemAll(){
    let nodelis=document.querySelector('div.showComandContent').childNodes;
    console.log(nodelis)
    nodelis.forEach(function(elem){
        elem.remove();
    })
    console.log(nodelis)
}
function move(){
    $(".run").text("Get me and my brothers");
    $('.result').text("Its also mine");
   
}
