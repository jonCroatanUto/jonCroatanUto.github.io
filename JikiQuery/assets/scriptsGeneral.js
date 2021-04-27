
$('li').each(function(index){
    
    $(this).attr('id','command '+index)
    $(this).click(callTemp);
    $(this).click(textLaunch);
    
})
function callTemp(){
    console.log('entra')
    let temp=document.querySelector("template.showComand");
    const tempConte=document.importNode(temp.content,true);
    $('body').append(tempConte);
    $('.backgound').click(closeTemp);
};
function closeTemp(){
    $(this).remove()
    $('.showComandContent').remove()
    $('.jquerycode').remove()
    $('.vanillacode').remove()

}


function textLaunch(event){
    let selected=event.target;
    console.log($(selected).attr('id'));
    
    if($(selected).attr('id')=='command 0'){
        $('.ejempleButVani').on('click',function(){
            $('.vanillacode').text("document.addEventListener('DOMContentLoaded',myFunction())")
        })
        $('.ejempleButJq').on('click',function(){
            $('.jquerycode').text("$( document ).ready(myFunction())")
        })
        $( ".run" ).text("click to active");
        $('.jsclas').text('DOMContentLoaded');
        $('.jQclas').text('ready');
        $('.run').on('click',ready);
        
        
    }else if
    ($(selected).attr('id')=='command 1')
    {   
        $('.ejempleButVani').on('click',function(){
            $('.vanillacode').text("document.querySelector('.run').adEventListener('click',myFunction());")
        })
        $('.ejempleButJq').on('click',function(){
            $('.jquerycode').text("$('.run').on('click',clicked);")
        })
        $( ".run" ).text("click");
        $('.jsclas').text('onclick');
        $('.jQclas').text('data("cliked",true)');
        $('.run').on('click',clicked);
        
    }else if
    ($(selected).attr('id')=='command 2')
    {  
        $('.ejempleButVani').on('click',function(){
            $('.vanillacode').text('document.querySelector( ".run" ).addEventListener("dblclick",myFunction()')
        })
        $('.ejempleButJq').on('click',function(){
            $('.jquerycode').text("$( '.run' ).dblclick(function()")
        })
        $( ".run" ).text("duble click");
        $('.jsclas').text('dblclick');
        $('.jQclas').text('dblclick');
        $('.run').on('click',dubl);
    }else if
    ($(selected).attr('id')=='command 3')
    {
        $('.ejempleButVani').on('click',function(){
            $('.vanillacode').text("document.onkeypress=Myfunction() ")
        })
        $('.ejempleButJq').on('click',function(){
            $('.jquerycode').text("$(document).keypress(function()")
        })
        $( ".run" ).text("click");
        $('.jsclas').text('onkeypress');
        $('.jQclas').text('keypress');
        $('.run').on('click',keyP);
    }else if
    ($(selected).attr('id')=='command 4')
    {   $('.ejempleButVani').on('click',function(){
        $('.vanillacode').text("document.querySelector( '.showComandContent' ).onmousemove=myfunction(event) ")
        })
        $('.ejempleButJq').on('click',function(){
            $('.jquerycode').text("$( '.showComandContent' ).mousemove(function(event)")
        })
        $( ".run" ).text("click");
        $('.jsclas').text('onmousemove');
        $('.jQclas').text('mousemove');
        $('.run').on('click',mousMv);
    }else if
    ($(selected).attr('id')=='command 5')
    {   $('.ejempleButVani').on('click',function(){
            $('.vanillacode').text("document.querySelector( '.inpText' ).value;")
        })
        $('.ejempleButJq').on('click',function(){
            $('.jquerycode').text("let texVal=$( '.inpText').val();")
        })
        $( ".run" ).text("click");
        $('.jsclas').text('value');
        $('.jQclas').text('val');
        $('.run').on('click',textVal);
    }else if
    ($(selected).attr('id')=='command 6')
    {
        $('.ejempleButVani').on('click',function(){
            $('.vanillacode').text("document.querySelector('.imag').onload=function()")
        })
        $('.ejempleButJq').on('click',function(){
            $('.jquerycode').text("$('.result').load('.imag',function()")
        })
        $( ".run" ).text("click to show image");
        $('.jsclas').text('onload');
        $('.jQclas').text('load');
        $('.run').on('click',loadAction);
    }else if
    ($(selected).attr('id')=='command 7')
    {   $('.ejempleButVani').on('click',function(){
        $('.vanillacode').text("document.querySelector( '.imatg').addEventListener('error',function()")
        })
        $('.ejempleButJq').on('click',function(){
        $('.jquerycode').text("$( '.imatg').on('error',function()")
        }) 
        $( ".run" ).text("click to show image");
        $('.jsclas').text('error');
        $('.jQclas').text('error');
        $('.run').on('click',errAction);
    
    }else if
    ($(selected).attr('id')=='command 8')
    {   $('.ejempleButVani').on('click',function(){
        $('.vanillacode').text("document.querySelector('.submitInput').addEventListener('submit',myFunction)")
        })
        $('.ejempleButJq').on('click',function(){
        $('.jquerycode').text("$('.frm').submit(function(event)")
        })
        $( ".run" ).text("click");
        $('.jsclas').text('onsubmit');
        $('.jQclas').text('submit');
        $('.run').on('click',iSubm);
    }else if
    ($(selected).attr('id')=='command 9')
    {   $('.ejempleButVani').on('click',function(){
        $('.vanillacode').text("document.querySelector('.sOptions').onchange=function()")
        })
        $('.ejempleButJq').on('click',function(){
        $('.jquerycode').text("$('.sOptions').change(function() ")
        })
        $( ".run" ).text("click");
        $('.jsclas').text('onchange');
        $('.jQclas').text('change');
        $('.run').on('click',isChange);
    }else if
    ($(selected).attr('id')=='command 10')
    {   
        $('.ejempleButVani').on('click',function(){
            $('.vanillacode').text("document.querySelector('.circle').onmouseover=function()")
        })
        $('.ejempleButJq').on('click',function(){
            $('.jquerycode').text("$('.circle').mouseover(function()")
        })
        $( ".run" ).text("click");
        $('.jsclas').text('onmouseover');
        $('.jQclas').text('mouseover');
        $('.run').on('click',isOver);
    }else if
    ($(selected).attr('id')=='command 11')
    {   $('.ejempleButVani').on('click',function(){
        $('.vanillacode').text("if(document.querySelector('#but').checked=true){...}")
        })
        $('.ejempleButJq').on('click',function(){
        $('.jquerycode').text("if($('#but').is(':checked')){function()}")
        })
        $( ".run" ).text("click");
        $('.jsclas').text('.checked');
        $('.jQclas').text(':checked');
        $('.run').on('click',isCliked);
    }else if
    ($(selected).attr('id')=='command 12')
    {   
        $('.ejempleButVani').on('click',function(){
            $('.vanillacode').text(`document.querySelectorAll('ul.list li').forEach(function(elem) {
                elem.addEventListener('click',function(event){
                    let sele=event.target;`)
        })
        $('.ejempleButJq').on('click',function(){
            $('.jquerycode').text(`$('ul.list li').each(function() {
                $(this).on('click',function(){..}`)
        })
        $( ".run" ).text("Display list");
        $('.jsclas').text('(this).click');
        $('.jQclas').text('(this).on');
        $('.run').on('click',selectOpt);
    }else if
    ($(selected).attr('id')=='command 13')
    {   
        $('.ejempleButVani').on('click',function(){
            $('.vanillacode').text("$('.result').append(myDiv)")
        })
        $('.ejempleButJq').on('click',function(){
            $('.jquerycode').text(`$('p.result').append("<div>hi I,m a div</div>");`)
        })
        $( ".run" ).text("click");
        $('.jsclas').text('create');
        $('.jQclas').text('add');
        $('.run').on('click',inElement);
    }else if
    ($(selected).attr('id')=='command 14')
    {   $('.ejempleButVani').on('click',function(){
            $('.vanillacode').text("document.querySelector('.result').remove();")
        })
        $('.ejempleButJq').on('click',function(){
            $('.jquerycode').text("$('.result').remove()")
        })
        $( ".run" ).text("click");
        $('.jsclas').text('remove');
        $('.jQclas').text('remove');
        $('.run').on('click',killElement);
    }else if
    ($(selected).attr('id')=='command 15')
    {   
        $('.ejempleButVani').on('click',function(){
            $('.vanillacode').text(`document.querySelector(".run").insertAdjacentHTML("beforeend","<p>Congratulations you added a text</p>");
            `)
        })
        $('.ejempleButJq').on('click',function(){
            $('.jquerycode').text(`$('.showComandContent').append("<p>Congratulations you added a text</p>");`)
        })
        $( ".run" ).text("click");
        $('.jsclas').text('insertAdjesent(beforeend)');
        $('.jQclas').text('append');
        $('.run').on('click',newLastCh);
    }else if
    ($(selected).attr('id')=='command 16')
    {   
        $('.ejempleButVani').on('click',function(){
            $('.vanillacode').text(`document.querySelector(".run").insertAdjacentHTML("afterbegin",'<p>Congratulations you preadded a text</p>');`)
        })
        $('.ejempleButJq').on('click',function(){
            $('.jquerycode').text(`$('.showComandContent').prepend("<p>Congratulations you preadded a text</p>");`)
        })
        $( ".run" ).text("click");
        $('.jsclas').text('insertAdjesent(afterbegin)');
        $('.jQclas').text('prepend');
        $('.run').on('click',newFirstCh);
    }else if
    ($(selected).attr('id')=='command 17')
    {   
        $('.ejempleButVani').on('click',function(){
            $('.vanillacode').text(`document.querySelector(".run").insertAdjacentHTML("afterend","<p>Congratulations crate this</p>");`)
        })
        $('.ejempleButJq').on('click',function(){
            $('.jquerycode').text(`$('.run').after("<p>Congratulations crate this</p>");`)
        })
        $( ".run" ).text("click");
        $('.jsclas').text('insertAdjesent(afterend)');
        $('.jQclas').text('after');
        $('.run').on('click',elementAfter);
    }else if
    ($(selected).attr('id')=='command 18')
    {   
        $('.ejempleButVani').on('click',function(){
            $('.vanillacode').text(`document.querySelector(".run").insertAdjacentHTML("beforebegin","<p>Congratulations crate this</p>");`)
        })
        $('.ejempleButJq').on('click',function(){
            $('.jquerycode').text(`$('.run').before("<p>Congratulations crate this</p>");`)
        })
        $( ".run" ).text("click");
        $('.jsclas').text('insertAdjesent(beforebegin)');
        $('.jQclas').text('before');
        $('.run').on('click',elementBefore);
    }else if
    ($(selected).attr('id')=='command 19')
    {   
        $('.ejempleButVani').on('click',function(){
            $('.vanillacode').text(`document.querySelector('.run').cloneNode(true)`)
        })
        $('.ejempleButJq').on('click',function(){
            $('.jquerycode').text(`$('.run').clone().appendTo(".result");`)
        })
        $( ".run" ).text("click");
        $('.jsclas').text('cloneNode(true)');
        $('.jQclas').text('clone');
        $('.run').on('click',colantion);
    }else if
    ($(selected).attr('id')=='command 20')
    {   
        $('.ejempleButVani').on('click',function(){
            $('.vanillacode').text(`document.querySelector('.result').classList.add('newClass');`)
        })
        $('.ejempleButJq').on('click',function(){
            $('.jquerycode').text(`$('.result').addClass('newClass');`)
        })
        $( ".run" ).text("click");
        $('.jsclas').text('classList.add');
        $('.jQclas').text('addClass');
        $('.run').on('click',addingClass);
    }else if
    ($(selected).attr('id')=='command 21')
    {
        $('.ejempleButVani').on('click',function(){
            $('.vanillacode').text(`document.querySelector('.result').classList.remove('newClass')`)
        })
        $('.ejempleButJq').on('click',function(){
            $('.jquerycode').text(`$('.result').removeClass('newClass')`)
        })
        $( ".run" ).text("click");
        $('.jsclas').text('classList.remove');
        $('.jQclas').text('removeClass');
        $('.run').on('click',removingClass);
    }else if
    ($(selected).attr('id')=='command 22')
    {
        $('.ejempleButVani').on('click',function(){
            $('.vanillacode').text(`document.querySelector('#newId').classList.toggle('result');`)
        })
        $('.ejempleButJq').on('click',function(){
            $('.jquerycode').text(`$('#newId').toggleClass('result');`)
        })
        $( ".run" ).text("click");
        $('.jsclas').text('classList.toggle');
        $('.jQclas').text('toggleClass');
        $('.run').on('click',toggClass);
    }else if
    ($(selected).attr('id')=='command 23')
    {
        $('.ejempleButVani').on('click',function(){
            $('.vanillacode').text(`document.querySelector('.run').setAttribute("disabled",true)`)
        })
        $('.ejempleButJq').on('click',function(){
            $('.jquerycode').text(`$('.run').prop('disabled',true)`)
        })
        $( ".run" ).text("click");
        $('.jsclas').text('setAttribute("disabled")');
        $('.jQclas').text('prop');
        $('.run').on('click',newAtribute);
    
    }else if
    ($(selected).attr('id')=='command 24')
    {
        $('.ejempleButVani').on('click',function(){
            $('.vanillacode').text(`document.querySelector('.imag').setAttribute("data-src","I'm data");`)
        })
        $('.ejempleButJq').on('click',function(){
            $('.jquerycode').text(`$('.imag').attr('data-src',"I'm data")`)
        })
        $( ".run" ).text("click");
        $('.jsclas').text('setAttribute("data-src","name")');
        $('.jQclas').text('attr("data-src","name")');
        $('.run').on('click',dataSrc);
    
    }else if
    ($(selected).attr('id')=='command 25')
    {
        $('.ejempleButVani').on('click',function(){
            $('.vanillacode').text(`document.querySelector('.result').style.display='none';`)
        })
        $('.ejempleButJq').on('click',function(){
            $('.jquerycode').text(`$('.result').hide();`)
        })
        $( ".run" ).text("click");
        $('.jsclas').text('display = "none/block"');
        $('.jQclas').text('hide/show');
        $('.run').on('click',noShow);
    
    }else if
    ($(selected).attr('id')=='command 26')
    {
        $('.ejempleButVani').on('click',function(){
            $('.vanillacode').text(`document.querySelector('.result').style.opacity='1';`)
        })
        $('.ejempleButJq').on('click',function(){
            $('.jquerycode').text(`$('.result').fadeIn('slow'); / $('.result').fadeOut('slow');`)
        })
        $( ".run" ).text("click");
        $('.jsclas').text('style.opacity +/-');
        $('.jQclas').text('fadeIn / fadeOut');
        $('.run').on('click',opacityUp);
    }else if
    ($(selected).attr('id')=='command 27')
    {
        $('.ejempleButVani').on('click',function(){
            $('.vanillacode').text(`document.querySelectorAll('.result li').forEach(function(elem){...elem.action...}`)
        })
        $('.ejempleButJq').on('click',function(){
            $('.jquerycode').text(`$('.result li').each(function(){
                $(this).css('font-weight','400');`)
        })
        $( ".run" ).text("click");
        $('.jsclas').text('forEach');
        $('.jQclas').text('each');
        $('.run').on('click',runArray);
    }else if
    ($(selected).attr('id')=='command 28')
    {
        $('.ejempleButVani').on('click',function(){
            $('.vanillacode').text(`document.querySelector('.run').parentNode`)
        })
        $('.ejempleButJq').on('click',function(){
            $('.jquerycode').text(`$('.run').parent()`)
        })
        $( ".run" ).text("click");
        $('.jsclas').text('parentNode');
        $('.jQclas').text('parent');
        $('.run').on('click',papaNode);
    }else if
    ($(selected).attr('id')=='command 29')
    {
        $('.ejempleButVani').on('click',function(){
            $('.vanillacode').text("")
        })
        $('.ejempleButJq').on('click',function(){
            $('.jquerycode').text(`$('.showComandContent').children()`)
        })
        $( ".run" ).text("click");
        $('.jsclas').text('childNodes');
        $('.jQclas').text('children');
        $('.run').on('click',sonNode);
    }
    else if
    ($(selected).attr('id')=='command 30')
    {
        $('.ejempleButVani').on('click',function(){
            $('.vanillacode').text(`document.querySelector('.showComandContent').childNodes`)
        })
        $('.ejempleButJq').on('click',function(){
            $('.jquerycode').text(`$('.specificEvent')`)
        })
        $( ".run" ).text("click");
        $('.jsclas').text('query.selectorAll(".className")');
        $('.jQclas').text('$(.className)');
        $('.run').on('click',clssN);
    }
    else if
    ($(selected).attr('id')=='command 31')
    {
        $('.ejempleButVani').on('click',function(){
            $('.vanillacode').text("document.querySelector('#tiitle')")
        })
        $('.ejempleButJq').on('click',function(){
            $('.jquerycode').text(`$('#tiitle')`)
        })
        $( ".run" ).text("click");
        $('.jsclas').text('query.selectorAll("#idName")');
        $('.jQclas').text('$(#idName)');
        $('.run').on('click',idN);
    }
    else if
    ($(selected).attr('id')=='command 32')
    {
        $('.ejempleButVani').on('click',function(){
            $('.vanillacode').text("if(document.querySelector('.jsclas').style.display='none')")
        })
        $('.ejempleButJq').on('click',function(){
            $('.jquerycode').text(`$('h2:hidden')`)
        })
        $( ".run" ).text("click");
        $('.jsclas').text('childNodes');
        $('.jQclas').text('tag:hidden');
        $('.run').on('click',classNone);
    }
    else if
    ($(selected).attr('id')=='command 33')
    {
        $('.ejempleButVani').on('click',function(){
            $('.vanillacode').text(` let optins= document.querySelectorAll('.Options')
            optins.forEach(function(elem){
                if(elem.selected == true)`)
        })
        $('.ejempleButJq').on('click',function(){
            $('.jquerycode').text(`$('.Options:selected')`)
        })
        $( ".run" ).text("click");
        $('.jsclas').text('childNodes');
        $('.jQclas').text(':selected');
        $('.run').on('click',selecD);
    }
    else if
    ($(selected).attr('id')=='command 34')
    {
        $('.ejempleButVani').on('click',function(){
            $('.vanillacode').text(`document.querySelector('.result a:first-child').css('color','yellow')`)
        })
        $('.ejempleButJq').on('click',function(){
            $('.jquerycode').text(`$('.result a:first-child')`)
        })
        $( ".run" ).text("click");
        $('.jsclas').text('childNodes');
        $('.jQclas').text('attr("href", direction');
        $('.run').on('click',aHref);
    }
    else if
    ($(selected).attr('id')=='command 35')
    {
        $('.ejempleButVani').on('click',function(){
            $('.vanillacode').text("working in it..")
        })
        $('.ejempleButJq').on('click',function(){
            $('.jquerycode').text("working in it..")
        })
        $( ".run" ).text("this comand it's in proces...");
        $('.jsclas').text('childNodes');
        $('.jQclas').text('.first');
        $('.run').on('click',frst);
    }
    else if
    ($(selected).attr('id')=='command 36')
    {
        $('.ejempleButVani').on('click',function(){
            $('.vanillacode').text(`let nodelis=document.querySelector('div.showComandContent').childNodes;nodelis.forEach(function(elem){
                elem.remove();`)
        })
        $('.ejempleButJq').on('click',function(){
            $('.jquerycode').text(`$('div.showComandContent').empty()`)
        })
        $(".run").text("press here to.. KILL THEM ALL!!");
        $('.result').text("No please don't do it!!x(");
        $('.jsclas').text('childNodes');
        $('.jQclas').text('.empty');
        $('.run').on('click',killThemAll);
    }
    else if
    ($(selected).attr('id')=='command 37')
    {
        $('.ejempleButVani').on('click',function(){
            $('.vanillacode').text("working in it..")
        })
        $('.ejempleButJq').on('click',function(){
            $('.jquerycode').text("working in it..")
        })
        $( ".run" ).text("this comand it's in proces...");
       
        $('.jsclas').text('childNodes');
        $('.jQclas').text('.animate');
        $('.run').on('click',move);
    }
  
}