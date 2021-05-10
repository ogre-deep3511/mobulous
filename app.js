require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use( express.static( "public" ) );

// Set template engine
app.set('view engine', 'ejs');

// Navigation
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/login', (req, res) => {
    res.render('login');
})

const UserRoute = require('./routes/users.route');
const StoryRoute = require('./routes/stories.route');
const Lookup = require('./routes/lookupExample.route');

const port = process.env.PORT;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Database Connection
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_PATH,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(() => {
        console.log("Database connected successfully!!!");
});

app.use('', UserRoute);
app.use('', StoryRoute);
app.use('', Lookup);

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});