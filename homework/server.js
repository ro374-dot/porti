const express = require('express'); // Import Express.js
const app = express(); // Create an Express application instance
const PORT = 3000; // Define the port number

// Define the books array
const books = [
  { id: 1, title: 'Book 1', author: 'Author 1' },
  { id: 2, title: 'Book 2', author: 'Author 2' },
  { id: 3, title: 'Book 3', author: 'Author 3' }
];

// Define GET endpoint for /books
app.get('/books', (req, res) => {
  res.json(books); // Send the books array as JSON
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
