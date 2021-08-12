//introduction to expressjs library for nodejs
const express = require('express'); //node framework for  better typing
const ejs = require('ejs'); // module for view templates
const morgan = require('morgan'); // 3rs party module for middleware
const mongoose = require('mongoose'); // mongodb library to connect to a database
const Blog = require('./models/blog'); // getting the blog schema



// express app
const app = express();

// MONGO DB CONNECTION
const dbURI = "mongodb+srv://hilary:test1234@nodetuts.cpj0z.mongodb.net/Node-tuts?retryWrites=true&w=majority";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

  // if(err) {
   //console.log(' oopps db not connected! ');
  // }else{
      //console.log('db connected succesfully :)' + result );
  // }
//});
       //.then(result => app.listen(3000))
       //.catch(err => console.log(err));
//});


// register view engine (ejs)
app.set('view engine', 'ejs');

// if you have a different folder instead of views use this instead
// app.set('views' , 'myviews');


//listen for requests
//app.listen(3000);

// middleware and static files
app.use(express.static('style')); // this makes a file public to the browser and i will be using it to link my css.
app.use(express.urlencoded({ extended: true})); // this takes the url and passes it as an object
app.use(morgan('dev'));


// mongoose & mongo tests
app.get('/add-blog', (req, res) => {
   const blog = new Blog({
     title: 'new blog',
     snippet: 'about my new blog',
     body: 'more about my new blog'
   })
 
   blog.save()
     .then(result => {
       res.send(result);
     })
     .catch(err => {
       console.log(err);
     });
 });
 
 app.get('/all-blogs', (req, res) => {
   Blog.find()
     .then(result => {
       res.send(result);
     })
     .catch(err => {
       console.log(err);
     }); 
 });

 app.get('/single-blog', (req, res) => {
    Blog.findById('6114fae0ae943a4bc2763bb2')
    .then(result => {
       res.send(result);
    })
    .catch(err => {
       console.log(err); 
    })
 })
 
// creating middleware in express
//app.use( (req, res, next) => {
  //console.log('New Request made');
   // console.log('host:', req.hostname);
   //console.log('path :', req.path);
   //console.log('method:', req.method);
   //next(); // to continue after the middleware
//});

// using morgan module to create a middleware
app.use(morgan('dev'));

//easier way to redirect a user
app.get('/', (req, res) => {
   //res.send('<p>express app</p>');
   //res.sendFile('./views/index.html', {root: __dirname}); // used to render a normal html page
  //res.render('index', {title: 'Home', blogs}); // used to render a page with ejs
  res.redirect('/blogs'); // to redirect the blogs to the home page and display it for the users
});

// easier way to redirect a user
app.get('/about', (req, res) => {
    // res.send('<p>about express app</p>');
   //res.sendFile('./views/about.html', {root: __dirname});
   res.render('about', {title: 'About'});
});




// redirect to create page
app.get('/create', (req, res) => {
   res.render('create', {title: 'Create a new post'});
});

// routes to new post 
app.get('/blogs', (req, res) => {
  Blog.find().sort({createdAt: -1}) // to sort them according to the newestpost created.
    .then((result) => {
       res.render('index', { title: 'All Posts', blogs: result })
    })
    .catch((err) => {
       console.log(err);
    });
});

// adding a post request to the database
app.post('/blogs', (req, res) => {
   const blog =  new Blog(req.body);

   blog.save()
   .then( (result) => {
      res.redirect('/blogs');
   })
   .catch( (err) => {
      console.log(err);
   })
})




// redirect to a page
//app.get('/about', (req, res) => {
  //  res.redirect('about');
// });





// 404 page
// note:always keep it a the end of the file. 
app.use( (req, res) => {
   //res.sendFile('./views/404.html', {root: __dirname});
   res.render('404', {title: '404'});
});

