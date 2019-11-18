const express = require("express");
const router = express.Router();

let {
    findtwo
} = require('../mongodb/mongodb');

const colName = "news";
router.get('/', async function (req, res) {
    let {
        username,
        password
    } = req.query;
    let result = await findtwo(colName, {
        username,
        password
    });
    if (result != "") {
        res.send({
            status: 1,
            meg: "success"
        })
    } else {
        res.send({
            status: 0,
            meg: "error"
        })
    }

})
module.exports = router;