$('.developerShow').toggle(); 
$('.videoGridShow').toggle(); 
$('h1').css('text-shadow','1px 1px 3px #d5f131')
$('h1').css('color','#2b3ddd;')

$('.web').on('click', ()=>{
    $('.developerHide').toggle(); 
    $('.web').css('text-shadow','1px 1px 3px #dfec96')
    $('.web').css('width','70%')
    $('.web').css('border-bottom','#06159e 1px solid;')
})

$('.motion').on('click', ()=>{
    $('.videoGridHide').toggle(); 
    $('.motion').css('text-shadow','1px 1px 3px #dfec96')
    $('.motion').css('width','70%')
    $('.motion').css('border-bottom','#06159e 1px solid;')
})