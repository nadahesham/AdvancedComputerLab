
   const express = require('express');
   const app = express();
   const Blog = require('./models/blogs');
   app.listen(3000);
 // server example using express: 
/*
  
  app.get('/', (req, res) => {
     res.send("Hello this is the first page");
  });
  app.get('/about', (req, res) => {
     res.send("Hello this is the about page");
  });
  app.get('/about-us', (req, res) => {
     res.send("Hello this is the about-us page");
  });
*/

  // database connection
  const mongoose = require('mongoose');
  const dbURI = 'mongodb+srv://nadahesham:test1234@tut1.5uvnx.mongodb.net/node-tuts?retryWrites=true&w=majority' ;
  mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result =>console.log("database connected") )
  .catch(err => console.log(err));



  // creating new blog
  /*app.get('/add-blog', (req, res) => {
    const blog = new Blog({
      title: 'new blog',
      snippet: 'about my new blog',
      body: 'more about my new blog'
    })
  
    blog.save()
      .then(result => {
        res.send(result);
        console.log("added");
      })
      .catch(err => {
        console.log(err);
      });
  });
*/  
// getting all the blogs


  app.get('/all-blogs', (req, res) => {
    Blog.find()
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
  });