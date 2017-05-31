//gets a new object
var g = G$('John', 'Doe',);

//use our chainable methods
g.greet().greet(true).log();

//use my object on the click of the login button
$('#login').click(function() {

    //create a new Greetr object - pretending i know the name from login
    var loginGrtr = G$('John', 'Doe');

    //fire off an HTML greeting, passing the '#greeting' as the selector and the chosen language, and log the welcome
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();

});
