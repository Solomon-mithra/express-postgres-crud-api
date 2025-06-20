import pool from '../config/db.js';

const createUserTable = async () => {
    const queryText = `CREATE TABLE if not exists users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);`;
    try{
        await pool.query(queryText);
        console.log('Users table created successfully');
    }
    catch(error) {
        console.error('Error creating users table:', error);
    }
};

export default createUserTable;