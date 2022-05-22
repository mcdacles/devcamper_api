const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

// Route files
const bootcamps = require('./routes/bootcamps');

// Load ENV vars
dotenv.config({ path: './config/config.env' });

const app = express();

// Dev Logging middleware
if (process.env.NODE_ENV === 'developement') {
  app.use(morgan('dev'));
}

// Manual logger instead of morgan
// app.use(logger);

// Mount routers
// Connecting URL to bootcamps route
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  )
);
