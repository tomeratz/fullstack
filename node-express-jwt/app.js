const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes')
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json(cookieParser()));
app.use(cookieParser())


// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://Admin:Ta123456@cluster0.73pfz.mongodb.net/authUsers'

// const dbURI = 'mongodb+srv://shaun:test1234@cluster0.del96.mongodb.net/node-auth';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then((result) => app.listen(3010))
  .catch((err) => console.log(err));

// routes
app.get('*', checkUser);
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', requireAuth, (req, res) => res.render('smoothies'));
app.use(authRoutes)

// cookies

// app.get('/set-cookies', (req, res) => {
//   res.cookie('newUser', false)
//   res.cookie('isEmployee', true, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true, secure: true })
//   // res.setHeader('set-cookie', 'newUser=true');
//   res.send('you got the cookie!');
// });



// app.get('/read-cookies', (req, res) => {
//   const cookies = req.cookies
//   console.log(cookies.newUser);
//   res.json(cookies)

// });