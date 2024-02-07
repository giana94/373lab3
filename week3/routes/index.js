const express = require('express');
const router = express.Router();
const { generateColorGridData } = require('../helpers/handlebars-helpers');

router.post('/results', (req, res) => {
  const colorGridData = generateColorGridData(); // Generate the updated color grid data
  res.render('results', { title: 'Results', colorGridData }); // Pass the message and updated color grid data to the results view
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lab3' });
});

module.exports = router;
