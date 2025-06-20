import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './config/db.js';

dotenv.config();

console.log('Environment Variables:', {
    PORT: process.env.PORT,
    DB_USER: process.env.DB_USER,
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
    DB_PORT: process.env.DB_PORT,
    DB_PASSWORD: process.env.DB_PASSWORD,
});

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(cors());
app.use(express.json());

//routes

//error handling

//testing the database connection
app.get('/', async (req, res) => {
    const result = await pool.query("SELECT current_database()")
    res.send(`Connected to database: ${result.rows[0].current_database}`);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

//server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
