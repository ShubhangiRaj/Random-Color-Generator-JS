$(document).ready(function() {

    var btn = $('.change-color-btn');
    var hexColor = $('.hex-color');

    // function to generate random HEX values.
    var generate = function() {
        newColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    }

    btn.on('click', function() {
        generate();

        $('body').css('background-color', newColor);
        btn.css('color', newColor);
        hexColor.text(newColor);
    });
});