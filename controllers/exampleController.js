import express from 'express';

// Bycrypt for password hashing
import bcrypt from 'bcrypt';

// Database connection
import pool from '../config/database.js';

const router = express.Router();

// GET /api/v1/hello
router.get('/hello', (req, res) => {
    res.json({ message: 'Hello World!' });
});


// All controllers can export their routes like this
export default router;