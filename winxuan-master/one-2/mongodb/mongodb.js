// 1-安装：npm i mongodb
const mongodb = require("mongodb");
// 创建MongoDBClient对象
const MongodbClient = mongodb.MongoClient;

// 设置url路径
let url = "mongodb://10.3.136.113:27017";
// 连接的数据库名
let dbName = "config";

async function F() {
    // 如果发现方式二有问题时，可以使用方式来查看输出的错误
    // 方式一：
    // 通过promise对象将client和db拿出去使用
    return new Promise((resolve, reject) => {
        // 使用对象里面的connect连接MongoDB数据库
        MongodbClient.connect(url, {
            useNewUrlParser: true
        }, function (err, client) {
            // err:连接数据库失败时的信息
            // client：连接成功后MongoDB客户端
            if (err) console.log("数据库连接失败",err);
            console.log("数据库创建成功");

            // 通过client.db()方法获取数据库,如果没有则自动创建
            var sjk = client.db(dbName);

            resolve({client, sjk});
        });
    })


    // 方式二：MongodbClient.connect如果传入回调，那么返回的是client；如果不传，那么返回的是一个promise对象
    // 连接数据库，通过解构拿到client
    // let client = await MongodbClient.connect(url, {
    //     useUnifiedTopology: true
    // });
    // // 通过client.db()方法获取数据库,如果没有则自动创建
    // var sjk = client.db(dbName);
    // return {
    //     client,
    //     sjk
    // };
}

// 增
function add() {

}

// 删
function remove() {

}
// 改
function updata() {

}
// 查
// colName:接收传递过来的集合
async function find(colName) {

    // 连接数据库,并通过解构获取client和sjk
    let {
        client,
        sjk
    } = await F();

    // 获取集合，如果没有将会自动创建(建表)
    var list = sjk.collection(colName);

    // 传入回调函数，结果就出现在回调里面
    // list.find().toArray((err, result) => {
    //     console.log(result);
    // });

    // 如果不传入回调，则返回的是一个promise对象
    // 通过promise对象将结果返回
    let result = await list.find().toArray();
    // console.log(result);
    
    // 关闭数据库连接
    client.close();
    
    // 将promise对象返回，调用该方法时，通过返回的这个promise对象就可以拿到result
    return result;
}
// 测试(看是否能连接数据库)
// find();
module.exports = {
    add,
    remove,
    updata,
    find
}