// CommonJS, every file is module (by default)
// Modules -Encapsularted Code (only share minimum)
const { john, peter } = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");

// If you require a module this way the code
// in the module will be executed
require("./7-mind-granade");

console.log(data);

sayHi("susan");
sayHi(john);
sayHi(peter);
