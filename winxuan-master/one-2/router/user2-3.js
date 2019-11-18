const express = require("express");

// 创建新的路由器对象
const router = express.Router();

const {
    find
} = require('../mongodb/mongodb');

let colName = "user3";
router.get('/', async function (req, res) {
    // 查询数据库
    let result = await find(colName); //finf()得到的是一个promise对象,通过promise得到result
    res.send(result);
})

module.exports = router;