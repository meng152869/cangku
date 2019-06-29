var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/damai', { useNewUrlParser:true });

var db = mongoose.connection;
db.once('open', function(){
    console.log('连接成功');
})

db.on('error', function(){
    console.log('连接失败');
})

module.exports = db;