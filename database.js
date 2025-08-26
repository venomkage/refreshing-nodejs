import mysql from 'mysql2';
import dotenv from 'dotenv'

dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();

export const getNotes = async () => {
    // using destructuring below, it gets first element of the array
    const [rows] = await pool.query("select * from notes");
    return rows;
}

export const getNotesById = async(id) => {
    const [row] = await pool.query(`
            Select * from notes
            where id = ?
        `,[id])
    return row[0]
}

export const createNotes = async(title, content) => {
    const result = await pool.query(`
            Insert into notes (title, content) values (?, ?)
        `, [title, content]);
    return result;
}



