const express = require('express');
const router = express.Router();

let {
    add
} = require('../mongodb/mongodb');


let colName = 'news'
router.post('/', async (req, res) => {
    let {
        username,
        password
    } = req.body;
    let result = await add(colName, {
        username,
        password
    });
    if (result == "success") {
        res.send({
            status: 1,
            meg: "success"
        });
    } else {
        res.send({
            status: 0,
            meg: "error"
        });
    }


})
module.exports = router;