
const mysql = require('mysql')


function connect1()
{
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'geraikitasystem',
        port: 3306
    })

    connection.connect()
    return connection
}

module.exports = {
    connect1: connect1
}
