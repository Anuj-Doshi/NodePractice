const hello = require('./Route')
function sayHi(name){
    console.log(hello.hello+name);
}

module.exports = sayHi