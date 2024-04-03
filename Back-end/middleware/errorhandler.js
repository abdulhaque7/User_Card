const errorHandler = (error, req, res, next) => {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  };
  
  module.exports = errorHandler;
  