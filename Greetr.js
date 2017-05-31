;(function(global, $) {
    //'new' an object
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }
    //hidden within the scope of the IIFE and never directly accesible
    var supportedLangs = ['en', 'es', 'dk'];

    var greetings = {
        en: 'Hello',
        es: 'Hola',
        dk: 'Hej'
    };

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos',
        dk: 'Davs'
    };

    var logMessages = {
        en: 'Logged in',
        es: 'Sesion iniciado',
        dk: 'Logged ind'
    };

    Greetr.prototype = {

        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language";
            }
        },

        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        greet: function(formal) {
            var msg;

            //if undefined or null it will be coerced to 'false'
            if (formal) {
              msg = this.formalGreeting();
            }
            else {
                msg = this.greeting()
            }

            if (console) {
                console.log(msg);
            }

            //'this' refers to the calling object at execution time
            //makes the method chainable
            return this;
        },

        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' +
this.fullName());
            }

            return this;
        },

        setLang: function(lang) {
            this.language = lang;

            this.validate();

            return this;
        },

        HTMLGreeting: function(selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';
            }

            if (!selector) {
                throw 'Missing jQuery selector';
            }

            var msg;
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }
            $(selector).html(msg);

            return this;
        }

    };

    //the actual object is created here allowing us to create new objects without calling 'new'
    Greetr.init = function(firstName, lastName, language) {

        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

        self.validate();
    }

    //trick borrowed from jQuery so i dont have to use the 'new' keyword
    Greetr.init.prototype = Greetr.prototype;

    //attach Greetr to the global object, and provide a shorthand 'G$'
    global.Greetr = global.G$ = Greetr;


}(window, jQuery));
