const express = require('express')
const app = express();
import indexRouter from "./routes/index"
import orderRouter from "./routes/order"

// 设置允许跨域访问
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use(indexRouter);
app.use(orderRouter);



app.listen(3000, () => console.log('Example app listening on port 3000!'))