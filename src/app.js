var express = require('express');
var app = express(); //express 实例

app.all('*', function(req, res, next) {  
    res.header("Access-Control-Allow-Origin", "*");  
    // res.header("Access-Control-Allow-Headers", "X-Requested-With");  
    // res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
    // res.header("X-Powered-By",' 3.2.1')  
    // res.header("Content-Type", "application/json;charset=utf-8");  
    next();  
}); 

app.all('*',(req,res)=>{
	res.json({
		message: '成功',
		method: req.method,
		uri: req.path
		
	})
})

// app.get('/test',(req,res)=>{
// 	res.json({
// 		name: 'yike',
// 		age: 30,
// 	})
// })
// app.post('/test',(req,res)=>{
// 	res.json({
// 		name: 'yike',
// 		age: 31,
// 	})
// })
// app.get('/hyh/getName',(req,res)=>{
// 	let {name} = req.query
// 	let {age} = req.query
// 	res.json({
// 		name,
// 		age
// 	})
// })

app.listen(8008,()=>{
	console.log('server 启动成功')
})