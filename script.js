$(document).ready(function(){
    $('.container h1').addClass('animated pulse');
    $('#top button').show().addClass('animated lightSpeedIn');

    $('#motto').typeIt({
        speed: 100,
        autoStart: false
    })
    .tiType('Wll')
    .tiPause(500)
    .tiDelete(2)
    .tiType('ell, ')
    .tiPause(1000)
    .tiType('I guess I am typing..')
    .tiBreak() .tiPause(750)
    .tiType(' but I am not really sure about it')
    .tiSettings({speed: 700})
    .tiType('...')
    .tiPause(750)
    .tiSettings({speed: 50})
    .tiDelete()
    .tiType('<b>My Motto:</b> ... ');
});