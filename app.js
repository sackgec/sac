// Requiring Express
const express = require('express');
// Requiring Middleware Morgan
const morgan = require('morgan');

// Including mongoose
const mongoose = require('mongoose');

// Including mongoose schema
const User = require('./models/user');

const { render } = require('ejs');

// express app
const app = express();

// Database connection
const dbURI = 'mongodb+srv://ankit:ankit12345@sac-website.g2dfm.mongodb.net/usersDatabase?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(process.env.PORT || 3000))
    .catch((err) => console.log(err));
// Using mongoose


// register view engine
app.set('view engine', 'ejs');

// Static files
app.use(express.static('public'));

// Middleware
app.use(express.urlencoded({ extended: true }));
// it takes all the url encoded data from the form and pass it as an object

// Using Middleware morgan for my understanding of the workflow routes
app.use(morgan('dev'));


//// Routes 
app.get('/', (req, res) => {
    res.render('index', {title: 'Home'});
});

app.get('/team', (req, res) => {
    res.render('team', {title: 'Our Team'});
});

app.get('/blogs', (req, res) => {
    res.render('blogs', {title: 'Blogs'});
});

app.get('/gallery', (req, res) => {
    res.render('gallery', {title: 'Gallery'});
});

app.get('/projects', (req, res) => {
    res.status(404).render('404', {title: 'Projects'});
});

app.get('/faculty', (req, res) => {
    res.render('faculty', {title: 'Faculty'});
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404', {title: 'Page Not Found'});
});
// This should stay at the very bottom