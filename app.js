const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');

require('dotenv').config({
  path: './config/config.env',
});

const app = express();

connectDB();

// for development
if (process.env.NODE_ENV === 'development') {
  app.use(
    cors({
      origin: process.env.CLIENT_URL,
    })
  );

  app.use(morgan('dev'));
}

app.use(express.json());

// Load all routes

const authRouter = require('./routes/auth.route');

app.use('/api/', authRouter);

app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Page Not Found - 404',
  });
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

// Tech Used

// express
// morgan
// dotenv
// cors
// mongoose

// nodemon - dev dependency
