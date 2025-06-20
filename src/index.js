import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './config/db.js';
dotenv.config();
import userRoutes from './routes/userRoutes.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use('/api', userRoutes);

//error handling
app.use(errorHandler)

//create user table if it doesn't exist
import createUserTable from './data/createUserTable.js';
await createUserTable();

//testing the database connection
app.get('/', async (req, res) => {
    const result = await pool.query("SELECT current_database()")
    res.send(`Connected to database: ${result.rows[0].current_database}`);
});


//server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
