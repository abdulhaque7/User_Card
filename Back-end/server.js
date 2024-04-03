const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoute');
const teamRoutes = require('./routes/teamRout');
const errorHandler = require('./middleware/errorhandler');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/teams', teamRoutes);

// Error Handler Middleware
app.use(errorHandler);

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => console.error('MongoDB connection error:', error));
