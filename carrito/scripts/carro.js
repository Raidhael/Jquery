$(document).ready(function (){

    $('.item').css('background-color', '#cecece');
    $('.cart_items').css('border' , '4px solid black');
    $('.item > label').css('text-decoration','underline');
    
    $('img').css('border','1px solid blue');
    $('label + label').css('color','white');
    $('input , *:contains(€)').css('color','green');
    $('div:empty').css('background-color','yellow');
    
    $('.item:first , .item:last').css('background-color','red');
    $('img[src*="camiseta"]').css('border-color','green');
    $('#cart_container button').css('color','red');
});
