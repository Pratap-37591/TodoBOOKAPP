import mysql from 'mysql';

const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Prathaphb@13",
    database: "test"
})

export default database;