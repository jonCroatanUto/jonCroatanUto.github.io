

function ready(){
    
    $( document ).ready(function() {
        $('.result').text('The DOM is Ready!');
    });
}
function clicked(){
    
    if($( ".run" ).data('clicked',true)){
        $('.result').text('The button had been cliked');
     }
}function dubl(){
   
    $( ".run" ).dblclick(function() {
        $('.result').text('You make the doble click!!');
    });
}function keyP(){
    $( ".run" ).text("press any key");
    $( ".run" ).keypress(function() {
        $('.result').text('You press a key, good job!!');
    });
}function mousMv(){
    $( ".run" ).text("mouve cursos below");
    $( ".showComandContent" ).mousemove(function(event) {
        $('.result').text('x: '+event.pageX+' , '+'y: '+event.pageY);
    });
}function textVal(){
    $( ".run" ).text("Write below & click here");
    $( ".run" ).ready(function() {
        $('.result').append('<input type="text" class="inpText">');
        $('.run').off('click',textVal);
        $('.run').on('click',grapTx);
        function grapTx(){
            let texVal=$( ".inpText" ).val();
            $('.result').text(`You write: ${texVal}`);
        }
    });
}function loadAction(){
    $( ".run" ).text("Wait to image");
    $('.result').append('<img src="assets/ShinChan1.jpg" alt="chin chan" class="imag">');
    $('.result').load('.imag',function() {
        $('.run').text('Enjoy this image!');
    });
}function errAction(){
    $('.result').append('<img src="assets/scriptsNative.js" class="imatg">');
    $( '.imatg').on('error',function() {
        $('.result').text('there is an error charging the image!');
    });
}
function iSubm(){
    $( ".run" ).text("Click submit input below");
    $('.result').append('<form action="" class="frm">');
    $('.frm').append('<input type="text" class="inpText">');
    $('.frm').append('<input type="submit" class="submitInput">');
    
    $('.frm').submit(function(event) {
        event.preventDefault();
        let texVal=$( ".inpText" ).val();
        $('.result').text(` ${texVal}`);
        $( ".run" ).text("You already submit this text:");
    });
}
function isChange(){
    $( ".result" ).text("");
    $('.result').append("<select class='sOptions'><option class='Options'> option 1</option><option class='Options'> option 2</option></select>");
    
    $('.sOptions').change(function() {
        $('.run').text('option changed');
    });
}
function isOver(){
    $( ".run" ).text("put the cursor over the sphere");
    $('.result').append("<div class='circle'></div>");
    let x=2;
    let y=2;
    $('.circle').mouseover(function() {
        
       
        $('.showComandContent').prepend('<p class="text">you are on</p>');
        console.log('llega')
        $('.text').css('transform',`translate(${x}px,${y}px)`);
        $('.text').css('transform',`scale(${x/2},${y/2})`);
        console.log('akitmb')
        x+=Math.random()*(-10);
        y+=Math.random()*10;
    });
}
function isCliked(){
    $( ".run" ).text("click checkbox below");
    $('.result').append("<input id='but' type='checkbox'>Check that");
    $('.result').css('fontSize','40px');
    $('#but').css('width','40px');
    $('#but').css('height','40px');
    $('#but').on('click',chk);
    function chk(){
        if($('#but').is(':checked')){
        
        $('.result').text('God job you checked!!');
        } 
    }
}
function selectOpt(){
    $(".run" ).text("click an element of the list");
    $('.result').append("<ul class=list><li>hello</li><li>bye bye</li></ul>");
    $('ul').css('font-size','25px')
    $('ul.list li').each(function() {
        $(this).on('click',function(){
           $('.result').append(this) ;
           $('ul.list').remove();
           $('.run').off('click');
           
        });
        
    });
}
function inElement(){
    
    $('p.result').append("<div>hi I,m a div</div>");
    
   
}
function killElement(){
    $( ".run" ).text("delete him");
    $('.result').text("please, delete me");
    $( ".run" ).on('click', function(){
        $('.result').remove()
    })
    
}
function newLastCh(){
    $( ".run" ).text("apend in this box");
    $('.showComandContent').append("<p>Congratulations you added a text</p>");
   
}
function newFirstCh(){
    $( ".run" ).text("prepend in this box");
    $('.showComandContent').prepend("<p>Congratulations you preadded a text</p>");
}
function elementAfter(){
    $( ".run" ).text("create after this button");
    $('.run').after("<p>Congratulations crate this</p>");
}
function elementBefore(){
    $( ".run" ).text("create before this button");
    $('.run').before("<p>Congratulations crate this</p>");
}
function colantion(){
    $( ".run" ).text("clone me please!!");
    $('.run').clone().appendTo(".result");
}
function addingClass(){
    $( ".run" ).text("add a class to the p element below");
    $('.result').text("<p class='result'>I need a new class</p>");
    
    $('.run').on('click', function(){
        $('.result').addClass('newClass');
        $('.newClass').text("<p class='result newClass'>thanks</p>");
    })
}
function removingClass(){
    $('.result').addClass('newClass');
    $( ".run" ).text("remove the newClass");
    $('.result').text("<p class='result newClass'>to many classse ,plese remove one</p>");
    
    $('.run').on('click', function(){
        $('.result').removeClass('newClass')
        $('.result').text("<p class='result'>thanks</p>");
    })
}
function toggClass(){
    $('.result').attr('id','newId');
    $( ".run" ).text("active and deactive the result class");
    $('.result').text("The class is activate");
    
    $('.run').on('click', function(){
        
        $('#newId').toggleClass('result');
       $('#newId').text("deactivate");
    })
}
function newAtribute(){
    $( ".run" ).text("Disable me!!");
    $('.result').text("Disable him");
   $('.run').prop('disabled',true)
   if($('.run:disabled')){
        $( ".run" ).text("¡¡¡oh,no you disabled me!!!!");
        $('.result').text("The input is disabled");
        $('.run').css('background-color','grey')
        $('.result').append("<button class='run' id='newbut'>Make the button able here!!!,come on!!</button>");
        $( "#newbut" ).css('background-color','red');
        $( "#newbut" ).on('click',function(){
            $('.run').css('background-color','black');
            $('.run').prop('disabled',false);
            $( ".run" ).text("Disable me!!");
            $('.result').text("Disable him");
        })
    }
}
function dataSrc(){
    $('.result').addClass('newClass');
    $( ".run" ).text("add an image with data-src");
    $('.result').append('<img src="assets/ShinChan1.jpg" alt="chin chan" class="imag">');
    $('.imag').attr('data-src',"I'm data");
    $('.result').append('<p>');
    $('.result p').text('<img src="assets/ShinChan1.jpg" alt="chin chan" class="imag" data-src="I,m data">');
    $( ".run" ).text("remove data-src");
    $( ".run" ).on("click",function(){
        $('.result').empty();
        $('.result').append('<img src="assets/ShinChan1.jpg" alt="chin chan" class="imag">');
        $('.result').append('<p>');     
        $('.result p').text('<img src="assets/ShinChan1.jpg" alt="chin chan" class="imag">');
        $('.imag').removeAttr('data-src');
        $( ".run" ).text("data-src have been removed");
    });
   
}

function noShow(){
    $( ".run" ).text("hide the text");
    $('.result').text("Come on hide me!!!");
    $( '.run').on('click',function() {
        $('.result').hide();
        $( ".run" ).text("The text have been hidden,show it!!");
        $( '.run').on('click',function(){
            $( ".run" ).text("Here we have again");
            $('.result').show();
        })
    });
}

function opacityUp(){
    $( ".run" ).text("Say no Hello!!!");
    $('.result').text("HOLA");
    $( ".run" ).on("click",function(){
        $( ".run" ).text(" naw Say HeLLooo !!!");
        $('.result').fadeOut('slow');
        $( ".run" ).on("click",function(){
            $( ".run" ).text("Say HeLLooo!!!");
            $('.result').fadeIn('slow');
        })
    });
}

function runArray(){
    $( ".run" ).text("Send the items in the list");
    $('.result').append("<ul><li>hola</li> <li>ketal?</li> <li>estaís?</li> </ul><button id='lis' class='run'>styles</button>");
    $( "#lis" ).on("click",function(){
        $('.result li').each(function(){
            $(this).css('font-weight','400');
            $(this).css('color','red');
        })
    });
   
}
function papaNode(){
    $(".run").text("Get the my parent");
    $('.result').text("Its also mine");
    $('.run').on('click',function() {
        console.log($('.run').parent())
        $('.run').text('The console.log show: ');
        $('.result').text('div.showComandContent');
        $('.result').css('color', 'violet')
    });        
}
function sonNode(){
    $(".run").text("Get me and my brothers");
    $('.result').text("Its also mine");
    $('.run').on('click',function() {
        console.log($('.showComandContent').children())
        $('.run').text('The console.log show: ');
        $('.result').text('div.t1, div.vanillaBox, div.jQueryBox, button.ejempleButJq, button.run, button.ejempleButVani, p.result');
        $('.result').css('color', 'violet')
        $('.result').css('font-size', '15px')
    });
}
function clssN(){
    $(".run").text("Get al the elements with the class: specificEvent");
    $('.run').on('click',function() {
        $('.specificEvent').css('color', 'yellow');
       
        $('.run').text('Good job!!');
        $('.result').text('Now check the Events descriptions');
        
    });
    
}
function idN(){
    $(".run").text("Get al the element with the iD: tiitle");
    $('.run').on('click',function() {
        $('#tiitle').css('font-weight', '100');
        $('#tiitle').css('color', 'yellow');
        $('.run').text('Good job!!');
        $('.result').text('Now check the Title of the web');
        
    });

}
function classNone(){
    $('.jsclas').hide();
    $(".run").text("change display none elements");
    
    $('.result').append('<button class="run" id="but">show the title and change styles</button>')
    $('h2:hidden').css('color','yellow')
    $('#but').on('click',function(){
        $('.jsclas').show();
    });
    
   
}
function selecD(){
    $(".run").text("Get me and my brothers");
    
    $('.result').append(" <select class='sOptions'><option class='Options'>goode morning</option><option class='Options'>good night</option><option class='Options'>I,m finally crazy?</option><option class='Options'> How long?</option></select>");
    $('.result').prepend('<button class="run" id="but">Witch I selected ? </button>')
    $("#but").on('click',function(){
        $('.result').text($('.Options:selected').text())
        $(".run").off('click');
    });
}
function aHref(){
    $(".run").text("Get me and my brothers");
    $('.result').append("<a>hola</a>");
    $('.result').append("<a>ketal?</a>");
    $('.result').append("<a>estaís?</a>");
    $('.result').append("<button id='lis' class='run'>change the color and url of the first</button>");
    $('.result a').attr('href','https://images-na.ssl-images-amazon.com/images/I/81EOy3o-eJL.jpg')
    $('#lis').on('click',function(){
        $('.result a:first-child').attr('href','https://www.google.com/imgres?imgurl=https%3A%2F%2Fthehighdefinitionwallpapers.com%2Fwp-content%2Fuploads%2F2020%2F02%2FNaturalFlowerNatural-Orange-butterfly-on-yellow-flowers-nice-background.jpg&imgrefurl=https%3A%2F%2Fthehighdefinitionwallpapers.com%2Fnatural-orange-butterfly-on-yellow-flowers-nice-background%2F&tbnid=U1D1C3OEPpzqQM&vet=12ahUKEwjt3ZaV_JnwAhUS04UKHYjtCQoQMygdegUIARDNAg..i&docid=qUF1M32c321_gM&w=1920&h=1200&q=flowers%20nice&ved=2ahUKEwjt3ZaV_JnwAhUS04UKHYjtCQoQMygdegUIARDNAg')
        $('.result a:first-child').css('color','yellow')
        $(".run").off('click')
    })

}
function frst(){
  console.log($('body input'))  
  
}
function killThemAll(){
     $('div.showComandContent').empty()
    
}
function move(){
    $('.run').ready(function () {
        setTimeout(function () {
        $(".result").animate({
        "width": "50%"
        }, 2000);
        }, 2000);
        })
   
}
