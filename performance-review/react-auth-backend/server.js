/**
 * This is the main file for the backend server.
 * It sets up an Express.js server with API endpoints for user signup and login.
 * User data is stored in memory for demonstration purposes.
 */

const ratingReview = require('../src/ratingReview.js');
const express = require('express'); // Import the Express.js framework.
const bodyParser = require('body-parser'); // Middleware for parsing request bodies.
const cors = require('cors'); // Middleware for handling Cross-Origin Resource Sharing.
const app = express(); // Create an Express application.
const port = 5000; // Define the port number for the server.
const reviews = []; // An array to store reviews.

app.use(bodyParser.json()); // Use body-parser to parse JSON request bodies.
app.use(cors()); // Enable CORS to allow cross-origin requests.

const users = []; // An array to store user data.

/**
 * Endpoint for user signup.
 * Users can create an account by providing a unique username and a password.
 * If successful, the user data is added to the 'users' array.
 *
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 * @returns {Object} - Returns a JSON response with the result of the signup operation.
 */
app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  if (!username || !password || password.length < 8) {
    return res.status(400).json({ message: 'Username and password are required. Password must be at least 8 characters long.' });
  }

  if (users.find(user => user.username === username)) {
    return res.status(400).json({ message: 'Username already exists.' });
  }

  users.push({ username, password });
  res.status(200).json({ message: 'Signup successful' });
});

/**
 * Endpoint for user login.
 * Users can log in by providing their username and password.
 * It checks if the provided credentials match any user in the 'users' array.
 *
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 * @returns {Object} - Returns a JSON response with the result of the login operation.
 */
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username && user.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Login failed. Please check your username and password.' });
  }

  res.status(200).json({ message: 'Login successful' });
});

/**
 * Start the server and listen on the specified port.
 * This function also logs a message to indicate that the server is running.
 */
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// API endpoints
app.post('/reviews', (req, res) => {
  const { title, text, username, ratings } = req.body;

  if (!title || !text || !username) {
    return res.status(400).json({ message: 'Title, Text, username and ratings are required.' });
  }

  const review = { title, text, username, ratings };
  reviews.push(review);

  res.status(201).json({ message: 'Review posted successfully' });
});

app.get('/reviews', (req, res) => {
  res.status(200).json(reviews);
});

app.delete('/reviews/:index', (req, res) => {
  const index = req.params.index;
  if (index < 0 || index >= reviews.length) {
    return res.status(404).json({ message: 'Review not found' });
  }
  reviews.splice(index, 1);
  // Update reviews in the server and send a success response.
  res.status(200).json({ message: 'Review deleted successfully' });
});

