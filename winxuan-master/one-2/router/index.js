// 引入express
const express = require('express');

// 创建新的路由器对象
const router = express.Router();

// 引入user
const User = require('./user');
const User1 = require('./user2-1'); 
const User2 = require('./user2-2'); 
const User3 = require('./user2-3'); 

// 进入子路由
router.use('/user',User);
router.use('/user2-1',User1);
router.use('/user2-2',User2);
router.use('/user2-3',User3);

// 导出路由对象
module.exports = router;