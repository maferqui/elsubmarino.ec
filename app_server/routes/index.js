const express = require('express');
const router = express.Router();

// Require controller modules.
const ctrlMain = require('../controllers/main');

const homepage = (req, res, next) => {
  res.render('index', { title: 'Homepage El Submarino.ec' });
};

/* GET home page. */
router.get('/', ctrlMain.index);

module.exports = router;
