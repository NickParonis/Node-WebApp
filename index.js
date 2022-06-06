const express = require('express');
const morgan = require('morgan');
const app = express();
const projectsRouter = require('./routes/projectsRoutes');
const usersRouter = require('./routes/usersRoutes');
// const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));
app.use(morgan('dev'));
app.use((req, res, next) => {
    console.log('Hello from the middleware');
    next();
});
app.use('/projects', projectsRouter);
app.use('/users', usersRouter);


// Route Handlers
const getHomePage = (req, res) => {
    res.render('home', {person: "test"});
};

const getAboutPage = (req, res) => {
    res.render('about');
};

const getContactPage = (req, res) => {
    res.render('contact');
};


app
    .route('/')
    .get(getHomePage)
app
    .route('/home')
    .get(getHomePage)
app
    .route('/about')
    .get(getAboutPage)
app
    .route('/contact')
    .get(getContactPage)

module.exports = app;
