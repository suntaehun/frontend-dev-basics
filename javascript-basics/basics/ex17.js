/*
Function.prototype.apply
Function.prototype.call
Function.prototype.bind
*/
var myObject = {
    v: "sun",
    f: function() {
        console.log(this.v);
    },
    f1: function(param1, param2) {
        console.log(param1 + " " + this.v + " " + (param2 ? param2 : ""));
    }
}

var yourObject = {
    v: 'dooly'
}

myObject.f.apply(yourObject);
myObject.f1.call(yourObject, "hello");
myObject.f1.call(yourObject, "hello", "again");

var f2 = function() {
    console.log(this.v);
}.bind(yourObject);

f2();