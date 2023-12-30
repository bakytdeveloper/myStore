// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config/config');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 5500;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://bakytdeveloper:my_store@mystore.v7xyrgn.mongodb.net/myStore?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('И ПОДКЛЮЧЕНН К БАЗЕ ДАННЫХ !!!'));

app.use(express.json());
app.use('/api', productRoutes); // Обработка маршрутов для продуктов

// Server Start
app.listen(PORT, () => {
    console.log(`СЕРВЕР РАБОТАЕТ НА ${PORT} ПОРТУ !!!`);
});
