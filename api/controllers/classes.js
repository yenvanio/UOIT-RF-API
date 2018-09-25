const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser');

const moment = require('moment');

const logic = require('../logic/classes.js');

router.use(bodyParser.urlencoded({ extended: true }));

/**
 * Get classes based on query parameters
 * @param {Any} req
 * @param {Any} res
 */
router.get('/all', function (req, res) {
  // Validating Date Format
  const date = req.query.date || moment().format('YYYY-MM-DD');
  if (!moment(date,'YYYY-MM-DD').isValid()) {
    res.statusCode = 400;
    res.json({ errors: ['Invalid Date Format! Use (YYYY-MM-DD)'] });
  }

  // Validating Time Format
  var start_time = req.query.start_time || moment().format("HH:mm:ss");
  var end_time = req.query.end_time || moment(date + ' ' + start_time).add(1, 'hours').format("HH:mm:ss");

  // Gathering Parameters
  var day = convertToDay(moment(date).day()); // Get day from moment
  var building = req.query.building || '';

  // Assemble the query data in JSON
  var queryData = {
      day: day,
      date: date,
      start_time: start_time,
      end_time: end_time,
      building: building
  }
  
  // Retrieve data from the Database
  logic.getClassesByParam(queryData, function (err, queryResult) {
    console.log(queryResult);
    if (err) {
      res.statusCode = 500;
      res.json({ errors: ['Unable to retrieve classes!'] });
    } else {
      res.statusCode = 200;
      res.json({ classes: queryResult });
    }
  });
});

/**
 * Get future classes in a room given a class
 * @param {Any} req 
 * @param {Any} res 
 */
router.get('/future', function (req, res) {
  // Validating Date Format
  var date = req.query.date || moment().format("YYYY-MM-DD");
  if (!moment(date,'YYYY-MM-DD').isValid()) {
    res.statusCode = 400;
    res.json({ errors: ['Invalid Date Format! Use (YYYY-MM-DD)'] });
  }

  // Validating Time Format
  var start_time = req.query.start_time || moment().format("HH:mm:ss");

  // Gathering Parameters
  var day = convertToDay(moment(date).day()); // Get day from moment
  var room = req.query.room || '';

  // Assemble the query data in JSON
  var queryData = {
      day: day,
      date: date,
      start_time: start_time,
      room: room
  }
  
  // Retrieve data from the Database
  logic.getFutureClasses(queryData, function (err, queryResult) {
    console.log(queryResult);
    if (err) {
      res.statusCode = 500;
      res.json({ errors: ['Unable to retrieve classes!'] });
    } else {
      res.statusCode = 200;
      res.json({ classes: queryResult });
    }
  });  
});

/**
 * Converts the day of the week from integer to string
 * @param {Number} num 
 */
function convertToDay(num) {
  console.log(num);
  switch(num) {
    case 0: 
      return 'S'
    case 1:
      return 'M'
    case 2: 
      return 'T'
    case 3:
      return 'W'
    case 4: 
      return 'R'
    case 5:
      return 'F'
    case 6:
      return 'S'
  }
}

// Add functions for classes module to export
module.exports = router;
