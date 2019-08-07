var express = require('express');
var router = express.Router();
import { foodlist } from "../models/index"

router.get("/", (req, res, next) => {
    foodlist.find({}, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result)
        }
    })
})

export default router;