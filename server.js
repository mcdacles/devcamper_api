const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');

// Load ENV vars
dotenv.config({ path: './config/config.env' });

// Conenct to database
connectDB();

// Route files
const bootcamps = require('./routes/bootcamps');

const app = express();

// Request Body parser
app.use(express.json());

// Dev Logging middleware
if (process.env.NODE_ENV === 'developement') {
  app.use(morgan('dev'));
}

// Manual logger instead of morgan
// app.use(logger);

// Mount routers
// Connecting URL to bootcamps route
app.use('/api/v1/bootcamps', bootcamps);

// Errorhandler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
      .yellow.bold
  )
);

// Handle unhandled promise rejection
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit
  server.close(() => process.exit(1));
});
