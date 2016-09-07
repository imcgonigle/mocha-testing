var express = require('express');
var router = express.Router();

// router.post('/:operator', (req, res, next) => {
// 	if(!req.body.num1 && !req.body.num2) {
// 		return
// 		res.status(432).json({message: 'No data Bro!'});
// 	}
//
// 	next();
// });

router.post('/add', (req, res, next) => {
  res.json({result: req.body.num1 + req.body.num2});
});

router.post('/sub', (req, res, next) => {
	res.json({result: req.body.num1 - req.body.num2});
});

router.post('/multiply', (req, res, next) => {
	res.json({result: req.body.num1 * req.body.num2});
});

router.post('/divide', (req, res, next) => {
	res.json({result: req.body.num1 / req.body.num2});
});


module.exports = router;
