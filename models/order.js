import mongoose from "mongoose";
mongoose.connect('mongodb://localhost/element');
var db = mongoose.connection;
db.on('open', () => {
    console.log("连接成功！");
});

var orderSchema = mongoose.Schema({
    imgUrl: String,
    name: String,
    status: String,
    time: String,
    shopname: String,
    num: String,
    price: String
});

var orderlist = mongoose.model('order', orderSchema);



export { orderlist };