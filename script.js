$(document).ready(function(){
    var clicks = 0
    $('#generateButton').on('click', function(){
        clicks ++
        $('body').append('<div><p>' + 
        clicks + '</p>' + 
        '<button id = "swapButton">Swap</button> <button id = "deleteButton">Delete</button>' +
        '</div>')
        $('div').css('background-color', 'red')
    })
    $('body').on('click', '#deleteButton', function(){
        $(this).parent().remove();
    });
    $('body').on('click', '#swapButton', function(){
       
    });
   
});