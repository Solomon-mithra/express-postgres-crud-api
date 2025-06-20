//centralized error handler
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        status: 500,
        message: 'Something broke!',
        error: err.message || 'Internal Server Error' 
    });
}

export default errorHandler;