const express = require('express');
const PORT =
3000;
const cors = require('cors');
const bodyParser = require('body-parser');
app.listen(PORT, () => {
console.log("Servidor rodando em http://localhost:${PORT}");
const app = express();
});
module.exports = app;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const clientRoutes
=
require('./routes/clients');
const orderRoutes = require('./routes/orders');
app.use('/api/clients', clientRoutes);
app.use('/api/orders', orderRoutes);
app.get('/', (req, res) => {
res.json({
message: 'API rodando!',
timestamp: new Date().toISOString()
});
});

const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host:'localhost',
    usar:'root',
    password:'yukio16',/*senha do seu banco*/
    database:'cliente_order_system',
    port:3306,
    connectionLimit:10


});
module.exports = pool;
