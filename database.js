import mysql from 'mysql2';

const pool = mysql.createPool({
    host:'127.0.0.1',
    user: 'root',
    password: '',
    database: 'notes_app'
}).promise();

export const getRows = async () => {
    // using destructuring below, it gets first element of the array
    const [rows] = await pool.query("select * from notes");
    return rows;
}




