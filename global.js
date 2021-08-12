// global objects

// console.log(global);

 setTimeout(() => {
    console.log('I am learning node.js ');
    clearInterval(int);
}, 3000);

// setting intrval with the global object
  const int = setInterval(() => {
    console.log('I love node.js');
  }, 1000);


// checking the directory and the file name
 console.log(__dirname);
 console.log(__filename)