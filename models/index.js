import mongoose from "mongoose";
mongoose.connect('mongodb://localhost/element');
var db = mongoose.connection;
db.on('open', () => {
    console.log("连接成功！");
});

var foodListSchema = mongoose.Schema({
    name: String,
    imgurl: String
});

var foodlist = mongoose.model('foodlist', foodListSchema);



export { foodlist };