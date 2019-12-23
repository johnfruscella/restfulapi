const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
});


//Connect to Data Base (DB) contains user name an
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true 
  };

mongoose.connect(
    process.env.DB_CONNECTION,
    options,
    () => console.log('Connected to DB')
);



//How do we start listening to the server?
app.listen(3000);