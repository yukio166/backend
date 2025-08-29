const mariadb = require('mariadb'); 
const pool = mariadb.createPool({ 
host: 'localhost', 
user: 'root', 
password: 'root', 
database: 'client_order_system', 
port: 3306, 
connectionLimit: 10 
}); 
module.exports=pool;