$(document).ready(function(){
    var clicks = 0
    $('#generateButton').on('click', function(){
        clicks ++
        $('body').append('<div></div>')
        $('div').append('<p> You have clicked this button ' + 
        clicks + ' times.</p>')
        $('div').append('<button id = "swapButton">Swap</button><button id = "deleteButton">Delete</button>')
        $('div').css('background-color', 'red')
    })
});