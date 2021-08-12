// modules in node 



const names = require('./people');

console.log(names.people, names.ages);

// also you can do this

const {people,ages} = require('./people');
console.log(people,ages);


// os is a modules that comes with node
// using os(operating system ) to check things about the system
const os = require('os'); // calling the os module
console.log(os.platform(), os.homedir()) // to get the platfom of my computer and the director
console.log(os.userInfo()) // getting the user info