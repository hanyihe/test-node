const express = require('express');

const router = express.Router();

router.get('/list',(req,res)=>{
	res.json({
		list:{[
			{id: 1},
			{number: 123},
		],
		[
			{id: 2},
			{number: 456},
		],
		[
			{id: 3},
			{number: 789},
		]}
	})
})

module.exports = router;