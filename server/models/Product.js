// server/models/Product.js
const mongoose = require('mongoose');

const featureSchema = new mongoose.Schema({
    key: { type: String, required: true },
    value: { type: String, required: true },
});

const imageSchema = new mongoose.Schema({
    url: { type: String, required: true },
});

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    features: { type: [featureSchema], required: true },
    images: { type: [imageSchema], required: true },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;




// {
//     "name": "Компьютерное кресло",
//     "description": "Компьютерное кресло ZHISHANG, игровое кресло с высокой спинкой для взрослых, эргономичное кресло для геймера с подставкой для ног, офисное кресло для ПК с подголовником и поясничной опорой, поворотное сиденье, грузоподъемность 350 фунтов (черный)",
//     "price": 409.99,
//     "category": "Мебель",
//     "brand": "ZHISHANG",
//     "features": [
//     { "key": "Цвет", "value": "Черный-689" },
//     { "key": "Возрастной диапазон", "value": "Взрослый" },
//     { "key": "Вес предмета", "value": "16 унций" }
// ],
//     "images": [
//     { "url": "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51ksBb0N4KL._AC_SX679_.jpg" },
//     { "url": "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61iJQcK7G7L._AC_SX679_.jpg" },
//     { "url": "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71kj8NgLejL._AC_SX679_.jpg" },
//     { "url": "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71n+lEpMEKL._AC_SX679_.jpg" },
//     { "url": "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71IwwAqLIkL._AC_SX679_.jpg" }
// ]
// },
// {
//     "name": "Мужские кроссовки",
//     "description": "Мужские кроссовки PUMA",
//     "price": 109.99,
//     "category": "Одажда",
//     "brand": "PUMA",
//     "features": [
//     { "key": "Инструкции по уходу", "value": "Машинная стирка" },
//     { "key": "Материал подошвы", "value": "Этиленвинилацетат" },
//     { "key": "Тип закрытия", "value": "Зашнуровать" },
//     { "key": "Уровень водонепроницаемости", "value": "Не водостойкий" }
// ],
//     "images": [
//     { "url": "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/513ihx8KsEL._AC_SY695_.jpg" },
//     { "url": "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51WSD5QBq9L._AC_SY695_.jpg" },
//     { "url": "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51-8qtfBQ1L._AC_SY695_.jpg" },
//     { "url": "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/516X-Afj-6L._AC_SY695_.jpg" },
//     { "url": "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/519a+N9iYcL._AC_SY695_.jpg" }
// ]
// }