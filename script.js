$(document).ready(function(){
    var clicks = 0
    $('#generateButton').on('click', function(){
        clicks ++
        $('body').append('<div>' +
        '<p>You have clicked this button ' + 
        clicks + ' times.</p></div>')
    })
});