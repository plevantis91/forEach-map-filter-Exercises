const express = require('express');
const app = express();
const ExpressError = require('./expressError');

const { calculateMean, calculateMode, calculateMedian } = require('./helper');

// Middleware to parse JSON bodies
app.use(express.json());

// Route to calculate mean
app.get('/mean', (req, res, next) => {
  const { nums } = req.query;
  
  if (!req.query.nums) {
    throw new ExpressError('You must provide a list of numbers in the nums query parameter', 400 );
  }

  const numbers = nums.split(',').map(num => parseFloat(num));

  if (numbers.some(isNaN)) {
    throw new ExpressError('Invalid number provided', 400 );
  }

  const mean = calculateMean(numbers);
  res.json({ operation: 'mean', result: mean });
});

// Route to calculate mode
app.get('/mode', (req, res, next) => {
  const { nums } = req.query;
  
  if (!nums) {
    throw new ExpressError('You must provide a list of numbers in the nums query parameter', 400 );
    
  }

  const numbers = nums.split(',').map(num => parseFloat(num));

  if (numbers.some(isNaN)) {
    throw new ExpressError('Invalid number provided', 400 );
  }

  const mode = calculateMode(numbers);
  res.json({ operation: 'mode', result: mode });
});

// Route to calculate median
app.get('/median', (req, res,next) => {
  const { nums } = req.query;
  
  if (!nums) {
    throw new ExpressError('You must provide a list of numbers in the nums query parameter', 400 );
  }

  const numbers = nums.split(',').map(num => parseFloat(num));

  if (numbers.some(isNaN)) {
    throw new ExpressError('Invalid number provided', 400 );
  }

  const median = calculateMedian(numbers);
  res.json({ operation: 'median', result: median });
});

// Start the server
app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
