import express from "express";
const router = express.Router();
import { orderlist } from "../models/order"

router.get("/order", (req, res, next) => {
    orderlist.find({},(err, result)=>{
        res.json(result);
    })
})

export default router;