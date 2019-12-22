const express = require('express');
const app = express();
const mongoose = require('mongoose')

//ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
});

app.get('/posts', (req, res) => {
    res.send('We are on posts');
});


//Connect to Data Base (DB) contains user name an
mongoose.connect('mongodb+srv://johnf:<password>@cluster0-pyvqf.mongodb.net/test?retryWrites=true&w=majority')


//How do we start listening to the server?
app.listen(3000);