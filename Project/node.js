//1
 const express = require('express');
const app = express();

// Handle GET request
app.get('/form', (req, res) => {
  // Render the form template
  res.render('form');
});

// Handle POST request
app.post('/form', (req, res) => {
  const formData = req.body;
  // Process the form data
  // ...
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});




//2

const axios = require('axios');

// Make an AJAX request
axios.get('data.json')
  .then((response) => {
    const data = response.data;
    // Process the data
    // ...
  })
  .catch((error) => {
    console.log('Error retrieving data:', error);
  });



//3

const express = require('express');
const session = require('express-session');
const app = express();

// Configure session middleware
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

// Login route
app.post('/login', (req, res) => {
  // Authenticate user
  // ...
  // Set session data
  req.session.user = {
    username: 'exampleuser',
    role: 'admin'
  };
  res.redirect('/dashboard');
});

// Logout route
app.get('/logout', (req, res) => {
  // Destroy session
  req.session.destroy();
  res.redirect('/');
});

// Protected route
app.get('/dashboard', (req, res) => {
  // Check if user is logged in
  if (req.session.user) {
    // User is logged in
    res.render('dashboard', { user: req.session.user });
  } else {
    // User is not logged in, redirect to login page
    res.redirect('/login');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

///4


const express = require('express');
const app = express();

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Render a template
app.get('/', (req, res) => {
  res.render('index', { title: 'My Website' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});



//5

const express = require('express');
const app = express();

// Define a middleware for handling 404 errors
app.use((req, res, next) => {
  res.status(404).render('404', { title: 'Page Not Found' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
