function Actor(name) {
    this.name = name;
}

Actor.prototype = {
    hello : function() {
          console.log('Hi, I am' + this.name);
    }
};

var leo = new Actor ('Leonardo Dicaprio');



var EventEmitter = require ('events').EventEmitter;

var MyEmitter = function() {

}

MyEmitter = new MyEmitter;

var myEmitter = new MyEmitter;

myEmitter.on('event', function(data) {
          console.log(data);
});

myEmitter.emit('event','hello');
